import React from 'react';
import background from '../../public/Background8.jpg';

function Contact() {
    return (
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        <img
          src={background}
          className="absolute top-20 left-0 w-full h-full object-cover z-0"
          alt="Background"
        />
  
        <div className="relative z-20 flex flex-col gap-4 max-w-md w-full mx-4">
          <div className="w-full flex items-center justify-center">
            <h1 className="bg-transparent p-8 rounded-lg shadow-lg font-bold text-5xl text-center text-black dark:text-white">About Us</h1>
          </div>
          <div className="w-full flex items-center justify-center">
            <h1 className="bg-transparent p-8 rounded-lg shadow-lg font-bold text-lg text-center text-black dark:text-white">
              Welcome to our library, your gateway to endless knowledge and discovery. Our extensive collection of books, digital resources, and multimedia materials caters to all ages and interests. Enjoy a peaceful and inspiring environment, perfect for reading, research, and personal growth. Whether you're a student, a professional, or simply a book lover, you'll find a wealth of information and inspiration at your fingertips. Your adventure in the world of literature and beyond starts here!
            </h1>
          </div>
        </div>
      </div>
    );
}

export default Contact;