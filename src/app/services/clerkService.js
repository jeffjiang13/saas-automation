const axios = require('axios');

const clerkApiBaseUrl = 'https://api.clerk.dev/v1';
const clerkApiKey = process.env.CLERK_SECRET_KEY;

const createClerkUser = async (userData) => {
  try {
    const response = await axios.post(`${clerkApiBaseUrl}/users`, userData, {
      headers: {
        'Authorization': `Bearer ${clerkApiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating Clerk user:', error.response.data);
    throw error;
  }
};

const updateClerkUser = async (userId, updatedData) => {
  try {
    const response = await axios.patch(`${clerkApiBaseUrl}/users/${userId}`, updatedData, {
      headers: {
        'Authorization': `Bearer ${clerkApiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating Clerk user:', error.response.data);
    throw error;
  }
};

module.exports = {
  createClerkUser,
  updateClerkUser,
};
