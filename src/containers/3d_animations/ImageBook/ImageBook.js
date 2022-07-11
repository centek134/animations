import React from "react";
import "../../../assets/scss/containers/3d_animations/ImageBook/ImageBook.css";
export const ImageBook = () => {
  return (
    <section className="wrapper_book">
        <div id="book_3d" className="book">
          <input className="inpt" type="checkbox"/>
          <div className="page p_1"></div>
          <div className="page p_2"></div>
        </div>
    </section>
  );
};
export default ImageBook;