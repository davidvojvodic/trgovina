const getStore = async () => {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID; // Use store ID from environment variable
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/stores/${storeId}`; // Adjusted URL

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Failed to fetch store');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching store:', error);
    throw error;
  }
};

export default getStore;

