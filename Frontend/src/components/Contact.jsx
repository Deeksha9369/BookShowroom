import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import contact from '../../public/Contact.jpg';

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 ">
    <img
      src={contact}
      className="absolute top-20 left-0 w-full h-full object-cover z-0"
      alt="contact"
    />

      <div className="relative z-10 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg max-w-md w-full mx-4 ">
      
        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Fullname"
              className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white "
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-600">This field is required</span>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white "
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-600">This field is required</span>
            )}
          </div>

          <div className="mt-3 space-y-2">
            <span>Message</span>
            <br />
            <input
              type="text"
              placeholder="Type your massage"
              className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white  "
              {...register("Message", { required: true })}
            />
            <br />
            {errors.Message && (
              <span className="text-sm text-red-600">This field is required</span>
            )}
          </div>

          <div className="flex justify-between items-center mt-4 ">
            <button
              type="submit"
              className="bg-blue-700 text-white rounded-md px-3 py-1 hover:bg-blue-800 duration-300 "
            >
              Submit
            </button>

          </div>
        </form>
      </div>
    
  </div>
  );
}

export default Contact
