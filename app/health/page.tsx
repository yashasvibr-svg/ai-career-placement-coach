import { headers } from "next/headers";

type HealthResponse = {
  status: string;
  timestamp: string;
};

async function getHealth(): Promise<HealthResponse> {
  const headersList = await headers();
  const host = headersList.get("host");

  if (!host) {
    throw new Error("Unable to determine the application host");
  }

  const protocol = host.startsWith("localhost") ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/health`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Health check failed");
  }

  return res.json();
}

export default async function HealthPage() {
  const health = await getHealth();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-900">
        Health Check
      </h1>

      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-slate-700">
          Status:{" "}
          <span className="font-semibold text-emerald-600">
            {health.status}
          </span>
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Checked at: {health.timestamp}
        </p>
      </div>
    </main>
  );
}