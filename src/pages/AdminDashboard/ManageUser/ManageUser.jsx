import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import UsersTable from "./UsersTable";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Loader from "../../../components/shared/Loader";
import EmptyState from "../../../components/shared/EmptyState";

const ManageUser = () => {
  const [loading, setLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      setLoading(true);
      const res = await axiosSecure.get(`/users`);
      setLoading(false);
      return res.data;
    },
  });

  if (loading) {
    return <Loader />;
  }

  const makeUserAdmin = (email, name) => {
    fetch(
      `https://summer-camp-sports-academie-server.vercel.app/users/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role: "admin" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${name} is now admin`);
        }
      });
  };
  const makeUserInstructor = (email, name) => {
    fetch(
      `https://summer-camp-sports-academie-server.vercel.app/users/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role: "instructor" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${name} is now instructor`);
        }
      });
  };

  return (
    <>
      {users && Array.isArray(users) && users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
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
      ) : (
        <EmptyState
          message="No users available"
          address="/dashboard"
          label="Go Back"
        ></EmptyState>
      )}
    </>
  );
};

export default ManageUser;
