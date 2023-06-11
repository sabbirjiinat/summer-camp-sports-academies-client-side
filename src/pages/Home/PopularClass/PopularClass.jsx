import { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import SectionTitle from "../../../components/shared/SectionTitle";
import Loader from "../../../components/shared/Loader";
import EmptyState from "../../../components/shared/EmptyState";
import PopularCard from "./PopularCard";

const PopularClass = () => {
    const [loading, setLoading] = useState(false);
  const [approveClass, setApproveClass] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://summer-camp-sports-academie-server.vercel.app/approve-class/approve"
    )
      .then((res) => res.json())
      .then((data) => {
        setApproveClass(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

    return (
        <Container>
            <div className="my-10">
                <SectionTitle
                    mainHeading='Popular Class' />
                  {approveClass &&
      Array.isArray(approveClass) &&
      approveClass.length > 0 ? (
        <div>
      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-10">
            {approveClass.slice(0,6).map((singleClass) => (
              <PopularCard
                key={singleClass._id}
                singleClass={singleClass}
              ></PopularCard>
            ))}
          </div>
        </div>
      ) : (
        <EmptyState
          message="No Class available Here"
          address="/"
          label="Back To Home"
        ></EmptyState>
      )}
  
            </div>
        </Container>
    );
};

export default PopularClass;