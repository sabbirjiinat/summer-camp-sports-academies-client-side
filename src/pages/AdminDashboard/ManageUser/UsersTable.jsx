const UsersTable = ({ user, index, makeUserAdmin, makeUserInstructor }) => {
  const { email, photo, name, role } = user || {};

  return (
    <tr>
      <td className="font-medium">
        <label>{index + 1}</label>
      </td>
      <td>
        <div className="avatar">
          <div className="w-12 h-12">
            <img
              className="rounded-full object-cover"
              src={photo}
              alt="Profile"
            />
          </div>
        </div>
      </td>

      <td className="font-medium">{email}</td>

      <td>
        <button
          disabled={role === "admin" || role === "instructor"}
          onClick={() => makeUserAdmin(email, name)}
          className={`bg-green-200 rounded-full px-1 font-medium disabled:cursor-not-allowed ${
            role === "instructor" && "disabled:bg-gray-600"
          }`}
        >
          Make Admin
        </button>
      </td>

      <td>
        {" "}
        <button
          disabled={role === "admin" || role === "instructor"}
          onClick={() => makeUserInstructor(email, name)}
          className={`bg-rose-200 rounded-full px-1 font-medium disabled:cursor-not-allowed ${
            role === "admin" && "disabled:bg-gray-600"
          }`}
        >
          Make Instructor
        </button>
      </td>

      <td className="font-medium">
        {(role && role === "admin" && "Admin") ||
          (role === "instructor" && "Instructor") ||
          "Student"}
      </td>
    </tr>
  );
};

export default UsersTable;
