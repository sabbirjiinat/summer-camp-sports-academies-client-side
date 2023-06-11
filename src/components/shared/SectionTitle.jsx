const SectionTitle = ({ mainHeading }) => {
  return (
    <div className="w-1/3 mx-auto text-center my-10">
      <h2 className="text-3xl text-indigo-500  border-y-4 py-2">
        {mainHeading}
      </h2>
    </div>
  );
};

export default SectionTitle;
