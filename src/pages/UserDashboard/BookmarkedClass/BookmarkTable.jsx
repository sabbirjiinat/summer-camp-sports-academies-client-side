import Swal from "sweetalert2";
import useBookmark from "../../../hooks/UseBookmark";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";

const BookmarkTable = ({ bookmarkedSport }) => {
  const {
    availableSeat,
    className,
    image,
    instructorName,
    price,
    instructorEmail,
    _id,
  } = bookmarkedSport;
  const [, , refetch] = useBookmark();
  const [axiosSecure] = useAxiosSecure();

  const deleteBookmarked = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to see this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/sports/${id}`)

          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your bookmark has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <tr className="text-center font-medium">
      <td>
        <div className="avatar">
          <div className="mask  w-12 h-12">
            <img className="rounded-full" src={image} alt="Sport Image" />
          </div>
        </div>
      </td>
      <td>{className}</td>
      <td>{instructorName}</td>
      <td>{instructorEmail}</td>
      <td>{availableSeat}</td>
      <td>{price}</td>{" "}
      <td>
        <Link
          to={`/dashboard/payment/${_id}`}
          className="bg-green-300 px-2 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          Pay
        </Link>
      </td>
      <td>
        <button
          onClick={() => deleteBookmarked(_id)}
          className="bg-red-400 px-2 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BookmarkTable;
