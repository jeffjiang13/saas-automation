import axios from 'axios';

const clerkApiBaseUrl = 'https://api.clerk.dev/v1';
const clerkApiKey = process.env.CLERK_SECRET_KEY as string;

interface UserData {
  email_address: string;
  first_name: string;
  image_url: string;
}

export const createClerkUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${clerkApiBaseUrl}/users`, userData, {
      headers: {
        Authorization: `Bearer ${clerkApiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error:any) {
    console.error('Error creating Clerk user:', error.response?.data);
    throw error;
  }
};

export const updateClerkUser = async (userId: string, updatedData: Partial<UserData>) => {
  try {
    const response = await axios.patch(`${clerkApiBaseUrl}/users/${userId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${clerkApiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error:any) {
    console.error('Error updating Clerk user:', error.response?.data);
    throw error;
  }
};
