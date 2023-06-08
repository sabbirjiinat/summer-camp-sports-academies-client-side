import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import { useState } from "react";

const useManageClasses = () => {
  const [loading, setLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
      queryFn: async () => {
        setLoading(true)
          const res = await axiosSecure.get("/classes");
          setLoading(false)
      return res.data;
    },
  });
  return [classes, refetch,loading];
};

export default useManageClasses;
