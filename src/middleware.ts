import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
    "/pricing",
    "/products",
    "/clients",
    "/resources",
    "/documentation",
    "/enterprise",
    "/privacy",
    "/terms",
    '/api/cron',
    '/api/create-user',  // Add this route if it should be publicly accessible
    '/api/update-user'   // Add this route if it should be publicly accessible
  ],
  ignoredRoutes: [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
    '/api/cron',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly
