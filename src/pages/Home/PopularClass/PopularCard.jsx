const PopularCard = ({ singleClass }) => {
  const { className, image, instructorName, price , availableSeat } = singleClass;

  return (
    <div
      className={`card card-compact w-full border border-gray-300 group
      flex
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
       
      </div>
    </div>
  );
};

export default PopularCard;
