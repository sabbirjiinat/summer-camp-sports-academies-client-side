import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import UsersTable from "./UsersTable";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
              <UsersTable
                  key={user._id}
                  user={user}
                  index={index}

              ></UsersTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
