import Container from "../../components/shared/Container";
import EmptyState from "../../components/shared/EmptyState";
import ClassCard from "./ClassCard";
import { useEffect, useState } from "react";
import Loader from "../../components/shared/Loader";
import { Helmet } from "react-helmet-async";

const Classes = () => {
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
      {approveClass &&
      Array.isArray(approveClass) &&
      approveClass.length > 0 ? (
        <div>
          <Helmet>
            <title>Summer Camp Sports - Classes</title>
          </Helmet>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-10">
            {approveClass.map((singleClass) => (
              <ClassCard
                key={singleClass._id}
                singleClass={singleClass}
              ></ClassCard>
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
    </Container>
  );
};

export default Classes;
