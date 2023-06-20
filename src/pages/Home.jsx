import React from "react";
import { style } from "../utilities/styles";
import me from "../assets/Images/me.jpg";

function Home() {
  return (
    <div className={`${style.pageStyle}`}>
      <h1 className={`${style.pageTitle}`}>About me</h1>
      <div className="flex flex-wrap h-[90%] items-center justify-start">
        <div class="avatar h-20 w-20">
          <img class="mask is-reuleaux-triangle" src={me} alt="avatar" />
        </div>
        {/* <img
          src={me}
          alt="my photo"
          className="w-[30%]  mask is-reuleaux-triangle"
        /> */}
        <div className="">
          <h1 className={`${style.pageTitle} font-comfortaa text-[#FFC107]`}>
            Bakhtiyor Abdullaev
          </h1>
          <p className="text-[#BB86FC]">{`<Frontent-end Develeoper />`}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
