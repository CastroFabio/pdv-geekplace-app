export const BASE_URL = "http://localhost:5000";

export const fazRequest = async (URL, method, body = null) => {
  let headers = {
    "Content-type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "http://localhost:5099/",
  };
  const completeURL = BASE_URL + URL;
  const request = {
    credentials: "include",
    method,
    headers,
    body,
  };

  console.log(`URL: ${completeURL}`);
  console.log(request);

  try {
    const response = await fetch(completeURL, request);
    console.log(response);

    if (response.status > 400 && response.status < 499) {
      throw new Error(response.status);
    }

    return response;
  } catch (err) {
    throw err;
  }
};
