import axios from "axios";
import { getResponse } from "./getResponse";

function getRequestProp(isMultipart) {
  // const serverUrl = process.env.BASE_API_URL;
  const serverUrl = "https://jsonplaceholder.typicode.com";
  return {
    serverUrl: serverUrl,
    requestHeader: {
      Accept: isMultipart ? "multipart/form-data" : "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
}

async function get(url, parameter, isJsonServer) {
  const { serverUrl, requestHeader } = getRequestProp(isJsonServer);
  return (
    axios
      .get(serverUrl + url, {
        params: parameter,
        headers: requestHeader,
      })
      .then((response) => {
        return getResponse("Success", response);
      })
      .catch((error) => {
        return getResponse("Error", error);
      })
  );
}

async function post(url, body, isJsonServer, isMultipart) {
  const { serverUrl, requestHeader } = getRequestProp(
    isJsonServer,
    isMultipart
  );
  return axios
    .post(serverUrl + url, body, {
      headers: requestHeader,
    })
    .then((response) => {
      return getResponse("Success", response);
    })
    .catch((error) => {
      return getResponse("Error", error);
    });
}

async function put(url, body, isJsonServer) {
  const { serverUrl, requestHeader } = getRequestProp(isJsonServer);
  return axios
    .put(serverUrl + url, body, {
      headers: requestHeader,
    })
    .then((response) => {
      return getResponse("Success", response);
    })
    .catch((error) => {
      return getResponse("Error", error);
    });
}

async function remove(url, body, isJsonServer) {
  const { serverUrl, requestHeader } = getRequestProp(isJsonServer);
  return axios
    .delete(serverUrl + url, {
      data: body,
      headers: requestHeader,
    })
    .then((response) => {
      return getResponse("Success", response);
    })
    .catch((error) => {
      return getResponse("Error", error);
    });
}

const axiosServices = {
  get,
  post,
  put,
  remove,
};
export default axiosServices;
