export const getResponse = (type, response) => {
  if (response === undefined || type === "Error") {
    return {
      type,
      statusCode: 0,
      statusText: "UNKNOWN",
      data: response || undefined,
    };
  }

  if (type === "Success")
    return {
      type,
      statusCode: response.status,
      statusText: response.statusText,
      data: response.data,
    };
};
