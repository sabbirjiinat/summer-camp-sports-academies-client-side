const ClassesTable = ({
  singleClass,
  updateStatusOfClassApprove,
  updateStatusOfClassDeny,
}) => {
  const {
    availableSeat,
    className,
    email,
    image,
    instructorName,
    price,
    _id,
    status,
  } = singleClass;

  return (
    <tr className="text-center font-medium">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img className="rounded-full" src={image} alt="Sport Image" />
          </div>
        </div>
      </td>
      <td>{className}</td>
      <td>{instructorName}</td>
      <td>{email}</td>
      <td>{availableSeat}</td>
      <td>{price}</td>
      <td>
        <button
          disabled={status === "approve" || status ==='deny'}
          onClick={() => updateStatusOfClassApprove(_id)}
          className="bg-green-300 px-2 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          Approve
        </button>
      </td>
      <td>
        <button
          onClick={() => updateStatusOfClassDeny(_id)}
          disabled={status === "approve" || status === 'deny'}
          className="bg-rose-300 px-2 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          Deny
        </button>
      </td>
      <td>
        <button className="bg-lime-300 px-2 rounded-xl">Feedback</button>
      </td>
    </tr>
  );
};

export default ClassesTable;
