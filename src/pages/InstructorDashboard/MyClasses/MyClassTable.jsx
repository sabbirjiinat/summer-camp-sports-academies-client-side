const MyClassTable = ({ singleClass }) => {
  const {
    availableSeat,
    className,
    image,
    price,
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
      <td>{availableSeat}</td>
      <td>{price}</td>
      <td>
        {(status === "approve" && "approved") ||
          (status === "deny" && "Deny") ||
          "Pending"}
      </td>
      <td>20</td>
      <td>20</td>
      <td>
        <button className="bg-lime-300 px-2 rounded-xl">Update</button>
      </td>
    </tr>
  );
};

export default MyClassTable;
