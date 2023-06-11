import { motion } from "framer-motion";
const PopularInstructorCard = ({instructor}) => {
    const { photo, name, email } = instructor;
  return (
    <motion.div
  
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.4 }}
    transition={{ duration: 0.2 }}
   
   

      className="col-span-1 flex  group border border-gray-300 p-3 rounded-md">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-sm
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
                duration-300
              "
            src={photo}
            alt="Room"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          ></div>
        </div>
        <div className="font-semibold text-lg">Name: {name}</div>
              <div className="font-normal">Email : {email}</div>
             
      </div>
      </motion.div>
  )
};

export default PopularInstructorCard;