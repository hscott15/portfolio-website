import React from "react";

const Foot = () => {
  return (
    <div className="relative">
      <div className="hidden md:block absolute -top-10 left-0 w-20 h-20 rounded-full bg-red-800" />
      <footer className="bg-transparent text-white px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">H.S</h1>
            
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;