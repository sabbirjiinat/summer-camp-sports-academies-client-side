import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./UseAuth";

const useAdmin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
