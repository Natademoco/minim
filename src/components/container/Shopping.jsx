import React from "react";
import {shoppingImgs} from "../../Data/Data";
import {style} from "../../styles";

const Shopping = () => {
  return (
    <div className={`container ${style.container} ${style.section} h-full`}>
      {shoppingImgs.map((shopImg) => {
        return (
          <div key={shopImg.id} className={`${shopImg.color} shopping min-h-[400px] grid place-items-center p-6 md:grid-cols-2 mb-[2rem]`}>
            <img src={shopImg.img} alt={shopImg.id} />
            <div>
              <div className={`title ${style.title}`}>{shopImg.title}</div>
              <p>{shopImg.text}</p>
              <a href="" className="shopBtn">
                {shopImg.btnText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shopping;
