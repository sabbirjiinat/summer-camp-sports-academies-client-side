import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: isInstructor = {}, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['instructor',user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
