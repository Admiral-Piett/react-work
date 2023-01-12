import axios from "axios";

const baseUrl = "http://localhost:3001/books";

export const postBooks = async (book) => {
  const response = await axios.post(baseUrl, book);
  console.log("postBooks");
  console.log(response);
  return response.data;
};

export const getAllBooks = async () => {
  const response = await axios.get(baseUrl);
  console.log("getAll");
  console.log(response);
  return response.data;
};

export const putBookById = async (id, book) => {
  const response = await axios.put(`${baseUrl}/${id}`, book);
  console.log("putById");
  console.log(response);
  return response.data;
};

export const deleteBookById = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  console.log("deleteById");
  console.log(response);
  return response.data;
};
