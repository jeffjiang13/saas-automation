import { currentUser } from '@clerk/nextjs'
import { db } from '../../lib/db' // Adjust the path based on your project structure

export const fetchUser = async () => {
  try {
    const user = await currentUser();
    if (user) {
      // Fetch the user from your Prisma database using the Clerk ID
      const dbUser = await db.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          id: true,
          clerkId: true,
          name: true,
          email: true,
          profileImage: true,
          tier: true,
          credits: true,
        },
      });

      if (dbUser) {
        return dbUser;
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
