import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import UsersTable from "./UsersTable";
import { toast } from "react-hot-toast";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
    
    const makeUserAdmin = (email,name) => {
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({role:'admin'})
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                toast.success(`${name} is now admin`)
            }
        })
        
    }
    const makeUserInstructor = (email,name) => {
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({role:'instructor'})
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                toast.success(`${name} is now instructor`)
            }
        })
        
    }



  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>Photo</th>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Make Instructor</th>
            <th>Role</th>
          
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
              <UsersTable
                  key={user._id}
                  user={user}
                  index={index}
                  makeUserAdmin={makeUserAdmin}
                  makeUserInstructor={makeUserInstructor}

              ></UsersTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
