import { useQuery } from "@tanstack/react-query";
import useHttpClient from "./useHttpClientContext";

const QUERY_KEY = ["TodaysSchedule"];

const useTodaysSchedule = () => {
  const httpClient = useHttpClient();

  const fetchTodaysSchedule = async () => {
    const { data } = await httpClient.get("/schedule/now");
    return data;
  };
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => fetchTodaysSchedule(),
  });
};

export default useTodaysSchedule;
