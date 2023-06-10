import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/UseAuth";
import { toast } from "react-hot-toast";
import { CgSpinnerTwo } from "react-icons/cg";
import { saveUserToDb } from "../../../api/Auth";
import UsePasswordToggle from "../../../hooks/UsePasswordToggle";
import { useState } from "react";

const Login = () => {
  const { loginWithEmail, loginWithGoogle, } = useAuth();
  const [loader, setLoader] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
  const [inputType, Icon] = UsePasswordToggle();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setLoader(true)
    loginWithEmail(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setLoader(false)
        toast.success("You have login successfully");
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error);
        setLoader(false)
        toast.error(error.message);
      });
  };

  const googleLogin = () => {
    setLoader(true)
    loginWithGoogle().then(result => {
      const loggedUser = result.user;
      saveUserToDb(loggedUser)
      setLoader(false)
      navigate(from, { replace: true })
      toast.success("You have login successfully");
      console.log(loggedUser);
    }).catch(error => {
      console.log(error);
      setLoader(false)
      toast.error(error.message)
    })
  }
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
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
                  <p className="text-red-600">Email is required !!</p>
                )}
              </div>
              <div className="relative">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  {...register("password", { required: true })}
                  type={inputType}
                  name="password"
                  id="password"
               
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                <div className="absolute top-10 right-4 cursor-pointer ">{Icon}</div>
                {errors.password && (
                  <p className="text-red-600">Password is required !!</p>
                )}
              </div>
            </div>

            <div>
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
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div onClick={()=>googleLogin()} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Dont have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
