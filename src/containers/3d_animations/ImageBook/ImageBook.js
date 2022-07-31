import React from "react";
import "../../../assets/scss/containers/3d_animations/ImageBook/ImageBook.css";
export const ImageBook = () => {
  let mouseClick = false;
  let rotateDegree = 0;

  const checkForClick = () => {
    mouseClick = true;
  }
  const noClick = () => {
    mouseClick = false;
  }
  const rotateX = (e) => {
    const imageBookId = document.getElementById("book_3d");
    if(mouseClick){
      if(rotateDegree >= 70){
        imageBookId.style.transform = `rotateX(0deg)`;
      }
      rotateDegree = e.pageY/20;
      imageBookId.style.transform = `rotateX(${rotateDegree}deg)`;
    }
  };
  return (
    <section onMouseDown={(e) => checkForClick(e)} onMouseUp={noClick} onMouseMove={(e) => rotateX(e)} id="wrapper_book" className="wrapper_book">
        <div id="book_3d" className="book">
          <input className="inpt" type="checkbox"/>
          <div className="page p_1"></div>
          <div className="page p_2"></div>
        </div>
    </section>
  );
};