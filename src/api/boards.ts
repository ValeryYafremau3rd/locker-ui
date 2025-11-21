import client from "./client";

export const fetchBoards = async () => {
  try {
    const response = await client.get(`/board/all`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message || "An error occurred during fetching boards"
    );
  }
};

export const fetchBoard = async (id: number) => {
  try {
    const response = await client.get(`/board/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message || "An error occurred during fetching a board"
    );
  }
};

export const putBoard = async (title: string) => {
  try {
    const response = await client.put(`/board/create`, { title });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "An error occurred");
  }
};
