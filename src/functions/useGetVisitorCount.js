import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getVisitApi = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_HOST}/api/v1/mail/visitors`
  );
  return response.data;
};

export const useGetVisitorCount = () => {
  const { data } = useQuery({
    queryKey: ["visitorCount"],
    queryFn: getVisitApi,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  return { data };
};
