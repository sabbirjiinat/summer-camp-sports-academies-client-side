import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import { useState } from "react";

const useBookmark = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { data: bookmarkedSports = [], refetch } = useQuery({
    queryKey: ["sports", user?.email],

    queryFn: async () => {
      setLoading(true);
      const res = await fetch(
        `https://summer-camp-sports-academie-server.vercel.app/sports?studentEmail=${user?.email}`
      );
      setLoading(false);
      const data = res.json();
      return data;
    },
  });
  return [bookmarkedSports, loading, refetch];
};
export default useBookmark;
