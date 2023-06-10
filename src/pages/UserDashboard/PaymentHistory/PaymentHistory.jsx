import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import EmptyState from "../../../components/shared/EmptyState";
import { useState } from "react";
import Loader from "../../../components/shared/Loader";
import EnrolledCard from "./EnrolledCard";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [loading, setLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: enrolledClass = [] } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      setLoading(false);
      return res.data;
    },
  });
  if (loading) {
    return <Loader />;
  }
  return (
      <div>
          <Helmet>
              <title>Summer Camp Sports - Payment History</title>
          </Helmet>
      {enrolledClass &&
      Array.isArray(enrolledClass) &&
      enrolledClass.length > 0 ? (
        <div className="grid grid-cols-1  md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
          {enrolledClass.map((enroll) => (
            <EnrolledCard key={enroll._id} enroll={enroll}></EnrolledCard>
          ))}
        </div>
      ) : (
        <EmptyState
          message="You don`t have enrolled any class"
          address="/dashboard/bookmarked-classes"
          label="Enroll"
        ></EmptyState>
      )}
    </div>
  );
};

export default PaymentHistory;
