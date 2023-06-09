import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/UseAuth";
import { CgSpinnerTwo } from "react-icons/cg";
import { useState } from "react";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth()
  const [loader,setLoader] = useState(false)
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
    setLoader(true)
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const { className, instructorName, email, availableSeat, price } = data;
        const newSportClass = {
          className,
          instructorName,
          email,
          availableSeat : parseFloat(availableSeat),
          price: parseFloat(price),
          image: imageUrl,
          status:'pending'
        };
        axiosSecure.post("/classes", newSportClass).then((data) => {
          if (data.data.insertedId) {
            reset()
            setLoader(false)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class is pending",
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
        <title>Summer Camp Sports - Dashboard</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Class Name
            </label>
            <input
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
            <label htmlFor="name" className="block text-gray-600">
              Instructor Name
            </label>
            <input
            defaultValue={user?.displayName}
              {...register("instructorName", { required: true })}
              className="w-full px-4 py-2 text-gray-800 border border-gray-300 focus:outline-rose-500   rounded-md"
              id="name"
              type="text"
              placeholder="Instructor Name"
            />
            {errors.instructorName && (
              <p className="text-red-500">Instructor name is required !</p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Instructor Email
            </label>
            <input
            defaultValue={user?.email}
              {...register("email", { required: true })}
              className="w-full px-4 py-2 text-gray-800 border border-gray-300 focus:outline-rose-500  rounded-md"
              id="email"
              type="email"
              placeholder="Instructor Email"
            />
            {errors.email && (
              <p className="text-red-500">Email is required !</p>
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
                    className="bg-rose-500 w-full rounded-md py-3 text-white"
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

export default AddClass;
