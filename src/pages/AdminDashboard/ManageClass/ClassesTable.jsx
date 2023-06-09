import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { toast } from "react-hot-toast";
import useManageClasses from "../../../hooks/UseManageClasses";

const ClassesTable = ({
  singleClass,
  updateStatusOfClassApprove,
  updateStatusOfClassDeny,
}) => {
  const {
    availableSeat,
    className,
    email,
    image,
    instructorName,
    price,
    _id,
    status,
    feedback
  } = singleClass;
  const [, refetch] = useManageClasses();
  const [isOpen, setIsOpen] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    axiosSecure
      .patch(`/classes/${_id}`, { feedback: feedback })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch()
          setIsOpen(false);
          toast.success("Your feedback has been sent");
        }
      });
  };

  return (
    <>
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
        <td>{email}</td>
        <td>{availableSeat}</td>
        <td>{price}</td>
        <td>
          <button
            onClick={() => updateStatusOfClassApprove(_id)}
            disabled={status === "approve" || status === "deny"}
            className="bg-green-300 px-2 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-600"
          >
            Approve
          </button>
        </td>
        <td>
          <button
            onClick={() => updateStatusOfClassDeny(_id)}
            disabled={status === "approve" || status === "deny"}
            className="bg-rose-300 px-2 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-600"
          >
            Deny
          </button>
        </td>
        <td>
          <button
            disabled={feedback}
            onClick={() => setIsOpen(true)}
            className="bg-lime-300 px-2 rounded-xl disabled:cursor-not-allowed disabled:bg-gray-600"
          >
            Feedback
          </button>
        </td>
      </tr>
      <div>
        {" "}
        <FeedbackModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleSubmitFeedback={handleSubmitFeedback}
        />
      </div>
    </>
  );
};

export default ClassesTable;
