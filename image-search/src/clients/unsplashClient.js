import axios from "axios";

const searchPhotosUrl = "https://api.unsplash.com/search/photos";

// This method is used to access Unsplash Images
export const get = async (queryTerm) => {
  const response = await axios.get(searchPhotosUrl, {
    headers: {
      Authorization: "Client-ID <placeholder>",
    },
    params: {
      query: queryTerm,
    },
  });
  return response.data.results;
};
