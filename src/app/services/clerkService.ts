'use server';

import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs';

interface UserData {
  email: string;
  first_name: string;
  image_url: string;
}

export const onCompleteUserRegistration = async (userData: UserData) => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error('No current user');
    }

    const registered = await db.user.create({
      data: {
        clerkId: user.id,
        email: userData.email,
        name: userData.first_name || '',
        profileImage: userData.image_url || '',
      },
      select: {
        name: true,
        id: true,
      },
    });

    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error:any) {
    console.error('Registration error:', error);
    return { status: 400, message: 'Error completing registration', error: error.message };
  }
};

export const onUpdateClerkUser = async (userId: string, userData: Partial<UserData>) => {
  try {
    const updatedUser = await db.user.update({
      where: { clerkId: userId },
      data: {
        email: userData.email,
        name: userData.first_name,
        profileImage: userData.image_url,
      },
    });

    return { status: 200, user: updatedUser };
  } catch (error) {
    console.error('Update error:', error);
    return { status: 400, message: 'Error updating user' };
  }
};
