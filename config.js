const apiUrl =
  process.env.NODE_ENV === "development"
    ? "https://ku91e.sse.codesandbox.io/api" // development api
    : "https://ku91e.sse.codesandbox.io/api"; // production api

export { apiUrl };
