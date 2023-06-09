import useAdmin from "../../hooks/UseAdmin";
import useInstructor from "../../hooks/UseInstructor";

const ClassCard = ({ singleClass }) => {
  const { availableSeat, className, image, instructorName, price } =
        singleClass;
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
  
  return (
      <div className="card card-compact w-full border border-gray-300 group
      bg-gradient-to-r from-[#a59bc9] to-[#7564c0] flex
    ">
      <figure>
        <img className="group-hover:scale-110 transition" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <div>
          <p className="text-base font-normal ">
            Instructor : {instructorName}
          </p>
          <p className="text-base font-normal ">
            Seat : {availableSeat}
          </p>
          <p className="text-base font-normal ">
            Price : ${price}
          </p>
        </div>
              <button
                  disabled={isAdmin || isInstructor}
                  className="mt-auto bg-[#4e32c9] px-2 py-2 rounded-sm text-white font-medium text-base disabled:cursor-not-allowed">Enroll</button>
          </div>
    </div>
  );
};

export default ClassCard;
