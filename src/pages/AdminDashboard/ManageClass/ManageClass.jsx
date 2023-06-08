import { toast } from "react-hot-toast";
import EmptyState from "../../../components/shared/EmptyState";
import Loader from "../../../components/shared/Loader";
import useManageClasses from "../../../hooks/UseManageClasses";
import ClassesTable from "./ClassesTable";
const ManageClass = () => {
    const [classes,refetch,loading] = useManageClasses();
    
    if (loading) {
      return <Loader/>
    }
    
    const updateStatusOfClassApprove = (id) => {
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'approve'})
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success('Class approved')
            }
        })
    }

    const updateStatusOfClassDeny = (id) => {
        fetch(`http://localhost:5000/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'deny'})
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                toast.success('Class Denied')
            }
        })
    }
  return (
    <>
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
                      updateStatusOfClass={updateStatusOfClassApprove}
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
