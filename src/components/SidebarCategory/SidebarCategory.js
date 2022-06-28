import React from 'react';
import {Link} from "react-router-dom";
import "../../assets/scss/components/sidebarcategory/sidebarcategory.css";
const SidebarCategory = (props) => {
  const list = props.list;
  return (
      <div className="category">
        <h3 className="category_text">{props.category_text}</h3>
        <div className="list">
            {list.map((item,i) => {
              return <Link key={i} className='list_item' to={item.url}>{item.name}</Link>
            })}
        </div>
      </div>
  )
}
export default SidebarCategory;