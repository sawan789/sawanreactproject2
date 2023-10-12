import axios from "axios";
// to install axios use this command in terminal : npm install axios
export const fetchusers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response);
  return response.data;
};

export const Api = {
  fetchusers,
};
