import { useQuery } from "@tanstack/react-query";
import Container from "../../components/shared/Container";
import EmptyState from "../../components/shared/EmptyState";
import ClassCard from "./ClassCard";
import { useState } from "react";
import Loader from "../../components/shared/Loader";

const Classes = () => {
  const [loading, setLoading] = useState(false);
  const { data: approveClass = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      setLoading(true);
      const res = await fetch(
        "http://localhost:5000/classes/approve-classes/approve"
      );
      setLoading(false);
      const data = await res.json();
      return data;
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      {approveClass &&
      Array.isArray(approveClass) &&
      approveClass.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-10">
          {approveClass.map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></ClassCard>
          ))}
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
