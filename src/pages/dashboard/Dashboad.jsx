import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./dashboard.scss";

const Dashboad = () => {
  useEffect(() => {
    ScrollReveal().reveal("._dashboard", {
      duration: 2000,
      easing: "ease-in-out",
      reset: true, // This resets the properties when scrolling down
      origin: "right", // You can change the origin as needed
      distance: "70px", // You can adjust the distance
      opacity: 0,
      afterReveal: (domEl) => {
        // Optional: You can add custom logic after the reveal animation
        console.log("Element revealed:", domEl);
      },
    });
  }, []);
  return (
    <div className="_dashboard h-[100%] grid grid-rows-[auto,1fr] px-10 pb-10 pt-5">
      <div className="div">Dashboard</div>

      <div className=" bg-slate-50 gap-10 grid grid-cols-3 grid-rows-3  mt-[1px] ">
        <Link
          to="/sample"
          className="transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>User Account </span>{" "}
          <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>Broadband Plans </span>{" "}
          <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>Network </span> <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>REGIONS</span> <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>PROVINCES </span>{" "}
          <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>MUNICIPALS </span>{" "}
          <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>BARANGAY </span> <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>Lorem </span> <span className="font-bold text-[25px]"></span>
        </Link>
        <Link
          to="/sample"
          className=".transform scale-100 hover:scale-110 transition-transform duration-500 bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer"
        >
          <span>Lorem </span> <span className="font-bold text-[25px]"></span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboad;
