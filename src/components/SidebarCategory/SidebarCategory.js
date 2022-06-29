import {React, useState} from 'react';
import {Link} from "react-router-dom";
import "../../assets/scss/components/sidebarcategory/sidebarcategory.css";
const SidebarCategory = (props) => {
  const [hideList, setHideList] = useState(true);
  const list = props.list;
  const textArrowDirection = () => {
    const arrow = document.querySelector(".category_text_arrow");
    if(!hideList){
      arrow.classList.remove("show");
    }
    else{
      arrow.classList.add("show");
    };
  };

  return (
      <div className="category">
        <h3 onClick={() => {setHideList(!hideList); textArrowDirection(); }} className="category_text">{props.category_text}<div className="category_text_arrow"></div></h3>
        <div id="list" className="category_list">
          {hideList? null
          :
          list.map((item,i) => {
            return <Link key={i} className='list_item' to={item.url}>{item.name}</Link>
          })}
        </div>
      </div>
  )
}
export default SidebarCategory;