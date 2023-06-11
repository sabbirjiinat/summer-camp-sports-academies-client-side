import { useQuery } from "@tanstack/react-query";
import EmptyState from "../../../components/shared/EmptyState";
import useAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import MyClassTable from "./MyClassTable";
import { useState } from "react";
import Loader from "../../../components/shared/Loader";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const [loading,setLoading] = useState(false)
  const [axiosSecure] = useAxiosSecure()
  const { user } = useAuth()
  const { data : classes = [],} = useQuery({
    queryKey: ['classes',user?.email],
    queryFn: async () => {
      setLoading(true)
      const res = await axiosSecure.get(`/classes/${user?.email}`)
      setLoading(false)
      return res.data;
    }
  })
  if (loading) {
    return <Loader/>
    
  }

  return (
    <>
      <Helmet>
        <title>Summer Camp Sports - My Classes</title>
      </Helmet>
      {classes && Array.isArray(classes) && classes.length > 0 ? (
        <div className="overflow-hidden">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Class name</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Enrolled Students</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((singleClass) => (
                <MyClassTable
                  key={singleClass._id}
                  singleClass={singleClass}
                ></MyClassTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState
          message="You hadn't add any classes"
          address="/dashboard/add-class"
          label="Add Class"
        ></EmptyState>
      )}
    </>
  );
};

export default MyClasses;
