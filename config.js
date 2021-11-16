const apiUrl =
  process.env.NODE_ENV === "development"
    ? "https://csb-2h5ie.vercel.app/api" // development api
    : "https://csb-2h5ie.vercel.app/api"; // production api

export { apiUrl };
