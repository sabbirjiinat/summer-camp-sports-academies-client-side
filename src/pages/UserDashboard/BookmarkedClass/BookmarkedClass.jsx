import { Helmet } from "react-helmet-async";
import EmptyState from "../../../components/shared/EmptyState";
import Loader from "../../../components/shared/Loader";
import useBookmark from "../../../hooks/UseBookmark";
import BookmarkTable from "./BookmarkTable";

const BookmarkedClass = () => {
  const [bookmarkedSports, loading] = useBookmark();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Helmet>
        <title>Summer Camp Sports - Bookmarked Classes</title>
      </Helmet>
      {bookmarkedSports &&
      Array.isArray(bookmarkedSports) &&
      bookmarkedSports.length > 0 ? (
        <div className="overflow-hidden">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookmarkedSports.map((bookmarkedSport) => (
                <BookmarkTable
                  key={bookmarkedSport._id}
                  bookmarkedSport={bookmarkedSport}
                ></BookmarkTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState
          message="You don`t have any bookmark yet"
          address="/classes"
          label="Bookmark"
        ></EmptyState>
      )}
    </>
  );
};

export default BookmarkedClass;
