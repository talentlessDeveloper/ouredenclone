import { useQuery } from "react-query";

const getUsers = async () => {
  const res = await fetch(`https://randomuser.me/api?results=8`);
  return res.json();
};

export const useFetch = () => {
  return useQuery("users", getUsers);
};
