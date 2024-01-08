/* export const BASE_URL = "https://jsonplaceholder.typicode.com/todos/";

export const fazRequest = async (URL, method, body = null) => {
  let headers = {
    "Content-type": "application/json; charset=UTF-8",
  };
  const completeURL = BASE_URL + URL;
  const request = {
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
 */
