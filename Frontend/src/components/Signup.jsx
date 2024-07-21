import React, { useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import banner from '../../public/Banner2.jpg';
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location=useLocation();
 const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/"

  const { register, 
    handleSubmit, 
    formState: { errors },
   } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios
    .post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successfully");
      navigate(from,{replace:true});
      }
    localStorage.setItem("Users",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
     if(err.response){
      console.log(err);
     toast.error("Error:"+ err.response.data.message);
     }
    });

  };
    

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src={banner}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        alt="Banner"
      />
      {isModalOpen && (
        <div className="relative z-10 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg max-w-md w-full mx-4 ">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"
            onClick={handleClose}
          >
                
          </button>
          <h3 className="font-bold text-xl mb-4 text-center justify-center">Signup</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Fullname"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white "
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-600">This field is required</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">This field is required</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">This field is required</span>
              )}
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-blue-700 text-white rounded-md px-3 py-1 hover:bg-blue-800 duration-300"
              >
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <Link to="/" className="underline text-blue-700 cursor-pointer">
                  Login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Signup