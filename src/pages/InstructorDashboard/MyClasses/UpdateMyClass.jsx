import { useState } from "react";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { CgSpinnerTwo } from "react-icons/cg";
import { useLoaderData } from "react-router-dom";

const UpdateMyClass = () => {
  const singleClass = useLoaderData();

  const [axiosSecure] = useAxiosSecure();
  const [loader, setLoader] = useState(false);
  const { availableSeat, className, price, _id } = singleClass;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.file[0]);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;
    setLoader(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const { className, availableSeat, price } = data;
        const newSportClass = {
          className,
          availableSeat: parseFloat(availableSeat),
          price: parseFloat(price),
          image: imageUrl,
        };
        axiosSecure.put(`/classes/${_id}`, newSportClass).then((data) => {
          if (data.data.modifiedCount > 0) {
            reset();
            setLoader(false);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class is Update Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Summer Camp Sports - Update Class</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Class Name
            </label>
            <input
              defaultValue={className}
              {...register("className", { required: true })}
              className="w-full px-4 py-2 text-gray-800 border  border-gray-300 focus:outline-rose-500  rounded-md "
              id="name"
              type="text"
              placeholder="Class Name"
            />
            {errors.className && (
              <p className="text-red-500">Class name is required !</p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block text-gray-600">
              Photo
            </label>

            <input
              {...register("file", { required: true })}
              type="file"
              className="file-input file-input-bordered file-input-info w-full h-10"
            />
            {errors.file && <p className="text-red-500">Photo is required !</p>}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="seat" className="block text-gray-600">
              Available Seat
            </label>
            <input
              defaultValue={availableSeat}
              {...register("availableSeat", { required: true })}
              className="w-full px-4 py-2 text-gray-800 border border-dotted border-gray-300 focus:outline-rose-500   rounded-md"
              id="availableSeat"
              type="number"
              placeholder="availableSeat"
            />
            {errors.availableSeat && (
              <p className="text-red-500">Available seat is required !</p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Price
            </label>
            <input
              defaultValue={price}
              {...register("price", { required: true })}
              className="w-full text px-4 py-2 text-gray-800 border border-dotted border-gray-300 focus:outline-rose-500   rounded-md"
              id="price"
              type="number"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500">Price is required !</p>
            )}
          </div>
        </div>
        <div className="my-3">
          <button
            type="submit"
            className="bg-indigo-500 w-full rounded-md py-3 text-white"
          >
            {loader ? (
              <CgSpinnerTwo className="mx-auto animate-spin text-2xl" />
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyClass;
