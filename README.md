# AI Career Coach

An AI-powered career preparation assistant designed to help college students understand their placement readiness and receive personalized preparation guidance.

## 🚀 Live Demo

https://ai-career-placement-coach.vercel.app

## 📌 Project Overview

AI Career Coach is a web application that combines a placement-readiness assessment with AI-generated career guidance.

A student provides their readiness score and current readiness level. The application sends this information to a secure server-side API route, which uses an AI model to generate practical preparation recommendations.

The goal is to provide students with a simple and personalized starting point for placement preparation.

## ✨ Features

- Placement readiness assessment
- Readiness score
- Readiness-level evaluation
- AI-generated career guidance
- Personalized preparation recommendations
- 7-day preparation plan
- Priority improvement areas
- Input validation
- Error handling
- Responsive interface
- Accessibility-focused UI
- Automated tests1
## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes
- TypeScript

### AI

- Google Gemini API
- Google GenAI SDK

### Testing

- Vitest

### Deployment

- Vercel

### Development

- Visual Studio Code
- Git
- GitHub

## 🤖 AI Integration

The main AI feature is the Career Coach.

The student provides:

- Placement readiness score
- Current readiness level

The information is sent to a server-side API route.

The API sends a structured prompt to the AI model requesting:

1. An interpretation of the student's score.
2. Three priority areas for improvement.
3. A practical 7-day preparation plan.
4. One measurable goal.

The API key is stored in an environment variable and is never placed directly in the frontend code.

The AI response is returned to the Career Coach interface and displayed to the student.
## 🏗️ Project Structure

```text
ai-capstone/
├── app/
│   ├── api/
│   │   ├── coach/
│   │   │   └── route.ts
│   │   └── health/
│   │       └── route.ts
│   │
│   ├── assessment/
│   │   ├── page.tsx
│   │   ├── result/
│   │   └── ...
│   │
│   ├── coach/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── interview/
│   │   └── page.tsx
│   │
│   ├── resume/
│   │   └── page.tsx
│   │
│   ├── health/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   └── Navigation.tsx
│
├── tests/
│   ├── assessment.test.ts
│   └── coach.test.ts
│
├── public/
├── .gitignore
├── package.json
├── README.md
├── REFLECTION.md
└── DEPLOYMENT_CHECKLIST.md
## ♿ Accessibility

The application was tested using Lighthouse.

Latest accessibility score:

**100/100**

The interface was checked for:

- Accessible form controls
- Keyboard usability
- Color contrast
- Proper page structure
- Readable text
- Responsive layout

No major accessibility issues were identified in the Lighthouse audit.

## 📊 Performance Audit

The application was tested using Lighthouse on mobile.

| Category | Score |
|---|---:|
| Performance | 74 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

The current performance score is 74. Further optimization could improve loading performance and bring the score closer to the project's target of 85+.

## 🛡️ Error Handling

The application validates assessment information before sending it to the AI service.

If required information is missing, the API returns an appropriate error response.

If the AI service is unavailable, the application displays a user-friendly error message instead of exposing technical details.

API credentials are also checked before making an AI request.

## 🚀 Deployment

The application is deployed using Vercel.

Live application:

https://ai-career-placement-coach.vercel.app

The production application was tested after deployment to verify that the main pages and Career Coach functionality were accessible.

## 🔄 Rollback Plan

If a production deployment introduces an issue, the previous working deployment can be restored through Vercel's deployment history.

The GitHub `main` branch is the source of truth for the application.

A known-good Git commit can also be redeployed if necessary.

## ⚠️ Known Limitations

- The application does not currently store student assessment history.
- User authentication is not implemented.
- Career recommendations depend on the information provided by the student.
- AI responses may vary between requests.
- The current Lighthouse performance score can be improved.
- The application does not yet provide persistent student profiles.

## 🔮 Future Improvements

Possible future improvements include:

- Student authentication
- Persistent assessment history
- Personalized student dashboards
- Resume analysis
- AI-powered mock interviews
