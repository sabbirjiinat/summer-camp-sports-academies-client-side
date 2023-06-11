import Swal from "sweetalert2";
// import useAdmin from "../../hooks/UseAdmin";
import useAuth from "../../hooks/UseAuth";
// import useInstructor from "../../hooks/UseInstructor";
import { useLocation, useNavigate } from "react-router-dom";

const ClassCard = ({ singleClass }) => {
  const {
    availableSeat,
    className,
    image,
    instructorName,
    price,
    _id,
    email,
    totalEnrolledStudent,
  } = singleClass;

  // console.log(bookmarkedSports);
  // const [isAdmin] = useAdmin();
  // const [isInstructor] = useInstructor();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const bookmarkSport = () => {
    if (user) {
      const newBookmarkSports = {
        availableSeat: parseFloat(availableSeat),
        className,
        image,
        instructorName,
        price: parseFloat(price),
        sportsId: _id,
        studentEmail: user?.email,
        instructorEmail: email,
        totalEnrolledStudent:parseInt(totalEnrolledStudent),
      };

      fetch(`http://localhost:5000/sports`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBookmarkSports),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Bookmarked successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You have to login for bookmark!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`card card-compact w-full border border-gray-300 group
     ${
       availableSeat === 0
         ? "bg-red-500"
         : "bg-gradient-to-r from-[#a59bc9] to-[#7564c0]"
     }  flex
    `}
    >
      <figure>
        <img
          className="group-hover:scale-110 transition h-36 w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <div>
          <p className="text-base font-normal ">
            Instructor : {instructorName}
          </p>
          <p className="text-base font-normal ">Seat : {availableSeat}</p>
          <p className="text-base font-normal ">Price : ${price}</p>
        </div>
        <button
          onClick={bookmarkSport}
          disabled={availableSeat === 0}
          className="mt-auto bg-[#4e32c9] px-2 py-2 rounded-sm text-white font-medium text-base disabled:cursor-not-allowed"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
