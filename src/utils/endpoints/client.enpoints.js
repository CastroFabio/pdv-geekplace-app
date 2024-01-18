import { fazRequest } from "../client";
import { endpointRoutes } from "../endpoints.routes";

export const fetchClientsList = async () => {
  const response = await fazRequest("/api/Clients", "GET");
  const data = await response.json();
  return data;
};

/* 
export const clientsDelete = async (clientID) => {
  await fazRequest(
    promiseUtil.format(endpointRoutes.clientsDelete, clientID),
    "DELETE"
  );
  return clientID;
};

export const clientsCreate = async (clientName) => {
  const body = JSON.stringify({
    clientName,
  });
  const response = await fazRequest(
    promiseUtil.format(endpointRoutes.clientsCreate),
    "POST",
    body
  );
  const data = await response.json();
  return data;
};

export const clientsUpdate = async (clientID, clientName) => {
  const body = JSON.stringify({
    clientID,
    clientName,
  });
  const response = await fazRequest(
    promiseUtil.format(endpointRoutes.clientsUpdate, clientID),
    "POST",
    body
  );
  const data = await response.json();
  return data;
};

export const fetchClientsDetail = async (clientID) => {
  const response = await fazRequest(
    promiseUtil.format(endpointRoutes.clientsDetail, clientID),
    "GET"
  );
  const data = await response.json();
  return data;
};
 */
