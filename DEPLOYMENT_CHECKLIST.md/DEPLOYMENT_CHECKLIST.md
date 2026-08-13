# Deployment Checklist

## Pre-Deployment

- [x] Application builds successfully with `npm run build`
- [x] Automated tests pass
- [x] AI Career Coach feature tested locally
- [x] Error handling implemented for missing AI configuration
- [x] API key is stored in environment variables
- [x] `.env.local` is excluded from Git
- [x] Git repository is up to date
- [x] Application is deployed on Vercel

## Accessibility

- [x] Lighthouse accessibility audit completed
- [x] Accessibility score: 100
- [x] Form controls have accessible labels
- [x] Keyboard interaction is supported
- [x] Error messages are displayed to users
- [x] Mobile layout checked

## Performance

- [x] Lighthouse performance audit completed
- [x] Performance score: 74
- [x] Best Practices score: 100
- [x] SEO score: 100

Performance can be improved further through additional optimization of
loading and rendering resources.

## AI Integration

- [x] Anthropic SDK integrated
- [x] API key remains server-side
- [x] AI request is handled through a Next.js API route
- [x] User assessment data is validated
- [x] AI failure has a user-friendly fallback message

## Testing

- [x] Assessment tests pass
- [x] Career Coach tests pass
- [x] 8 automated tests pass
- [x] Production build verified

## Deployment

- [x] Production URL is available
- [x] Main branch pushed to GitHub
- [x] Production application tested after deployment

## Rollback Plan

If a deployment introduces a problem, the previous working deployment
can be restored through Vercel's deployment history.

The main branch is the source of truth. A known-good Git commit can be
redeployed if necessary.

## Final Sign-Off

Status: Ready for submission

Project: AI Career Placement Coach