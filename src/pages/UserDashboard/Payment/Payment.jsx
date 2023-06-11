import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(
  import.meta.env.VITE_PAYMENT_GATEWAY_STRIPE_PK
);
const Payment = () => {
  const singleSportData = useLoaderData();
  const { price } = singleSportData;
  const amount = parseFloat(price).toFixed(2);

  return (
    <>
      <Helmet>
        <title>Summer Camp Sports - Payment</title>
      </Helmet>
      <div>
      
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} singleSportData={singleSportData} />
      </Elements>
    </div>
    </>
  );
};

export default Payment;
