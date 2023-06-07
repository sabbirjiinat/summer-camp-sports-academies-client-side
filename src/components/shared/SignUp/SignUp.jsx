import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import SignUpAnimation from "./signUp.json";
import Container from "../Container";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <div className="md:flex justify-center items-center md:py-10">
        <div>
          <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
              <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm text-gray-400">
                  Welcome to Sports Academies
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                    {errors.name && (
                      <p className="text-red-600">Name is required !!</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="image" className="block mb-2 text-sm">
                      Select Image:
                    </label>
                    <input
                      {...register("file", { required: true })}
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                    {errors.file && (
                      <p className="text-red-600">Image is required !!</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                    {errors.email && (
                      <p className="text-red-600">Image is required !!</p>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm mb-2">
                        Password
                      </label>
                    </div>
                    <input
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 16,
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      })}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="*******"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    />
                    {errors.password && (
                      <p className="text-red-600">Password is required !!</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-500 my-2">
                        Password should be at least six character
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-red-500 my-2">
                        Password should be less than sixteen character
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-500 my-2">
                        At least one uppercase,lowercase,number and one special
                        character:
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm mb-2">
                        Confirm Password
                      </label>
                    </div>
                    <input
                      {...register("confirm", { required: true })}
                      type="password"
                      name="password"
                      id="confirm"
                      placeholder="*******"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    />
                    {errors.confirm && (
                      <p className="text-red-600">Password is required !!</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-rose-500 w-full rounded-md py-3 text-white"
                  >
                    Continue
                  </button>
                </div>
              </form>
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">
                  Signup with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              </div>
              <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
                <FcGoogle size={32} />

                <p>Continue with Google</p>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="hover:underline hover:text-rose-500 text-gray-600"
                >
                  Login
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen">
          <Lottie animationData={SignUpAnimation}></Lottie>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
