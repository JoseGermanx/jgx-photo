import React from "react";
import paymentMethod from "../../assets/img/paypal.png"

const Footer = () => {
  return (
    <>
     <div className="w-full bg-black py-5 text-center">
    <p className="text-gray-500 ">
      This web application it is a part of 
        {" "}
      <a
        className="font-medium text-gray-800 underline transition-colors hover:text-yellow-400"
        href="https://betacode.cl"
        target="_blank"
        rel="noopener noreferrer"
      >
        BetaCode
      </a>
    </p>
    <p>BetaCode Servicios Digitales e Informaticos E.I.R.L</p>
    </div>
    <div>
      <img src={paymentMethod} style={{width: "200px"}} />
    </div>
    </>
  );
};

export default Footer;
