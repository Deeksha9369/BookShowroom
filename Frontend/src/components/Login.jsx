import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const closeButton = document.getElementById('close-modal-btn');
    const modal = document.getElementById('my_modal_3');

    if (closeButton && modal) {
      closeButton.addEventListener('click', () => {
        modal.close();
      });
    }

    // Cleanup event listener on component unmount
    return () => {
      if (closeButton && modal) {
        closeButton.removeEventListener('click', () => {
          modal.close();
        });
      }
    };
  }, []);

  return (
    <div >
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <button
            id="close-modal-btn"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"
          >
            ✕
          </button>
          <h3 className="font-bold text-xl text-center justify-center ">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white '
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (<span className='text-sm text-red-600'>This field is required</span>)}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='Enter password'
                className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white '
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (<span className='text-sm text-red-600'>This field is required</span>)}
            </div>
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-blue-700 text-white rounded-md px-3 py-1 hover:bg-blue-800 duration-300'
              >
                Login
              </button>
              <p className='text-xl'>
                not registered?{" "}
                <Link to="/signup" className='underline text-blue-700 cursor-pointer'>
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
