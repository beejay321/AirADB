import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export default api;

const getPet = async (id) => {
  try {
    const response = await api.get(`/pets/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
