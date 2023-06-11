import { useState } from "react";
import Container from "../../../components/shared/Container";
import Loader from "../../../components/shared/Loader";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAuth from "../../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import EmptyState from "../../../components/shared/EmptyState";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const { data: instructors = [] } = useQuery({
      queryKey: [user?.role === "instructor"],
      queryFn: async () => {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/users/instructor`);
        setLoading(false);
        const data = res.json();
        return data;
      },
    });
    if (loading) {
      return <Loader />;
    }
    return (
        <Container>
            <div>
            <SectionTitle mainHeading='Popular Instructors'/>
            {instructors && Array.isArray(instructors) && instructors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-10">
          {instructors.slice(0,6).map((instructor) => (
            <PopularInstructorCard
              key={instructor._id}
              instructor={instructor}
            ></PopularInstructorCard>
          ))}
        </div>
      ) : (
        <EmptyState
          message="No instructor available here"
          address="/"
          label="Back To Home"
        ></EmptyState>
      )}
           </div>
        </Container>
    );
};

export default PopularInstructors;