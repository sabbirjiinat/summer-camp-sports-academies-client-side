import { useState } from "react";
import FeedbackModal from './FeedbackModal'
import { Link } from "react-router-dom";

const MyClassTable = ({ singleClass }) => {
  const {
    availableSeat,
    className,
    image,
    price,
    status,
    feedback,
    totalEnrolledStudent,
    _id
  } = singleClass;
  console.log(singleClass);
 
  const [isOpen, setIsOpen] = useState(false);
 

  const closeModal = () => {
    setIsOpen(false);
  };

  const feedBack = [ feedback ]
  
  return (
    <>
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
        <td>{ totalEnrolledStudent}</td>
      <td><button disabled={!feedback} onClick={()=> setIsOpen(true)} className="bg-green-300 px-1 rounded-full disabled:cursor-not-allowed disabled:bg-gray-600  ">See feedback</button></td>
      <td>
        <Link to={`/dashboard/single-class/${_id}`} className="bg-lime-300 px-2 rounded-xl">Update</Link>
      </td>
      </tr>
      <FeedbackModal isOpen={isOpen} closeModal={closeModal} feedBack={feedBack} />
    </>
  );
};

export default MyClassTable;
