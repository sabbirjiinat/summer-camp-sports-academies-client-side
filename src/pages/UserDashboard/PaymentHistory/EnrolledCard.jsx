const EnrolledCard = ({ enroll }) => {
  console.log(enroll);
  const {
    className,
    image,
    instructorEmail,
    instructorName,
    price,
    transitionId,
  } = enroll;
  return (
    <div className="card card-compact w-full bg-base-100 border  border-gray-400-700 bg-gradient-to-r from-[#c1bfc7] to-[#857da9] group">
      <figure>
              <img
                  className="h-40 object-cover w-full group-hover:scale-110 transition"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
              <h2 className="card-title">{className}</h2>
              <div>
              <p className="font-medium text-gray-800">Payment Id : { transitionId}</p>
              <p className="font-medium text-gray-800">Instructor Name : {instructorName}</p>
              <p className="font-medium text-gray-800">Instructor Email : { instructorEmail}</p>
              <p className="font-medium text-gray-800">Cost : { price}</p>
             </div>
       
      </div>
    </div>
  );
};

export default EnrolledCard;
