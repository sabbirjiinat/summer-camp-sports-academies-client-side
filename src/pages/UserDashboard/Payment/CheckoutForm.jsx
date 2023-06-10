import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";
import "./CheckoutForm.css";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckoutForm = ({ amount, singleSportData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { amount }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [amount, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error.message);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      toast.error(confirmError.message);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transitionId = paymentIntent.id;
      const {
        className,
        image,
        instructorEmail,
        instructorName,
        price,
        sportsId,
        studentEmail,
        _id,
      } = singleSportData;
      const newPaymentInfo = {
        transitionId,
        className,
        image,
        instructorEmail,
        instructorName,
        price: parseFloat(price),
        bookmarkId: sportsId,
        bookmarkedId: _id,
        studentEmail,
        date: new Date(),
      };
      axiosSecure.post("/payment", newPaymentInfo).then((res) => {
        if (
          res.data.deleteMethod.deletedCount > 0 &&
          res.data.insertMethod.insertedId
        ) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment is successfully done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <form className="w-2/3 mx-auto mt-60" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="bg-indigo-600 px-2 py-1 rounded-sm font-medium text-white"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
