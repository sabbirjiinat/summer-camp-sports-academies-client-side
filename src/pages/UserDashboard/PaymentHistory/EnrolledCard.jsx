const EnrolledCard = ({ enroll }) => {

  const {
    className,
    image,
    instructorEmail,
    instructorName,
    price,
    transitionId,
  } = enroll;
  return (
    <div className="card card-compact w-full text-white border  border-gray-400 shadow-2xl bg-[#3f4c97] group">
      <figure>
              <img
                  className="h-40 object-cover w-full group-hover:scale-110 transition"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
              <h2 className="card-title">{className}</h2>
              <div >
              <p className="font-medium ">Payment Id : { transitionId}</p>
              <p className="font-medium ">Instructor Name : {instructorName}</p>
              <p className="font-medium ">Instructor Email : { instructorEmail}</p>
              <p className="font-medium ">Cost : { price}</p>
             </div>
       
      </div>
    </div>
  );
};

export default EnrolledCard;
