import client from "./client";

export const fetchUsers = async () => {
  try {
    const response = await client.get(`/users`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message || "An error occurred during fetching users"
    );
  }
};
