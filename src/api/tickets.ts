import client from "./client";

export const fetchStatuses = async () => {
  try {
    const response = await client.get(`/tickets/statuses`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message ||
        "An error occurred during fetching statuses"
    );
  }
};

export const fetchTickets = async () => {
  try {
    const response = await client.get(`/tickets`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message || "An error occurred during fetching tickets"
    );
  }
};

export const fetchTicket = async (id: number) => {
  try {
    const response = await client.get(`/tickets/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message ||
        "An error occurred during fetching a ticket"
    );
  }
};

export const dropTicket = async (id: number) => {
  try {
    const response = await client.delete(`/tickets/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message ||
        "An error occurred during deleting a ticket"
    );
  }
};

export const putTicket = async (data: {
  title: string;
  description: string;
  boardId: number;
  assignedToId: number;
  statusId: number;
}) => {
  try {
    //fix
    data.boardId = +data.boardId;
    data.assignedToId = +data.assignedToId;
    data.statusId = +data.statusId;

    const response = await client.put(`/tickets/create`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "An error occurred");
  }
};

export const postTicket = async (data: any) => {
  try {
    //fix
    data.boardId = +data.boardId;
    data.assignedToId = +data.assignedToId;
    data.statusId = +data.statusId;

    const response = await client.post(`/tickets/${data.id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "An error occurred");
  }
};
