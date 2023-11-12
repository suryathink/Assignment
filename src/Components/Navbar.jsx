import { Button } from "bootstrap";
import React from "react";
import TypesExample from "./Button";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://neofi.app/static/img/brand_new.svg"
          alt="NeoFi Logo"
        />
      </div>
      <div className="mainContent">
        <div onClick="https://github.com/suryathink/">Trade</div>
        <div  onClick="https://github.com/suryathink/">Earn</div>
        <div  onClick="https://github.com/suryathink/">Support</div>
        <div  onClick="https://github.com/suryathink/">About</div>
      </div>
      <div className="connectWallet">
        <TypesExample />
      </div>
    </div>
  );
};

export default Navbar;
