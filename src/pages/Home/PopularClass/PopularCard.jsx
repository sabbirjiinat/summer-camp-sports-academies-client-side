import { motion } from "framer-motion";
const PopularCard = ({ singleClass }) => {
  const { className, image, instructorName, price, availableSeat } =
    singleClass;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.4 }}
      transition={{ duration: 0.2 }}
      
      className='card card-compact w-full border bg-[#354172] border-gray-300 group text-white
      flex rounded-md
    '
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
    </motion.div>
  );
};

export default PopularCard;
