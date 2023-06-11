import { toast } from "react-hot-toast";
import EmptyState from "../../../components/shared/EmptyState";
import Loader from "../../../components/shared/Loader";
import useManageClasses from "../../../hooks/UseManageClasses";
import ClassesTable from "./ClassesTable";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
const ManageClass = () => {
  const [classes, refetch, loading] = useManageClasses();
 const [axiosSecure] = useAxiosSecure()
  if (loading) {
    return <Loader />;
  }

  const updateStatusOfClassApprove = (id) => {

    axiosSecure.patch(`/classes/${id}`, { status: 'approve' })
      .then(data => {
        if (data.data.modifiedCount > 0) {
          refetch();
          toast.success("Class approved");
      }
    })

  
  };

  const updateStatusOfClassDeny = (id) => {
    axiosSecure.patch(`/classes/${id}`, { status: 'deny' })
    .then(data => {
      if (data.data.modifiedCount > 0) {
        refetch();
        toast.success("Class Denied");
    }
  })
  };
  return (
    <>
       <Helmet>
        <title>Summer Camp Sports - Manage Classes</title>
      </Helmet>
      {classes && Array.isArray(classes) && classes.length > 0 ? (
        <div className="overflow-hidden">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Status</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((singleClass) => (
                <ClassesTable
                  key={singleClass._id}
                  singleClass={singleClass}
                  updateStatusOfClassApprove={updateStatusOfClassApprove}
                  updateStatusOfClassDeny={updateStatusOfClassDeny}
                ></ClassesTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState
          message="No class available"
          address="/dashboard"
          label="Go Back"
        ></EmptyState>
      )}
    </>
  );
};

export default ManageClass;
