import {React, useState} from 'react';
import {Link} from "react-router-dom";
import "../../assets/scss/components/sidebarcategory/sidebarcategory.css";
const SidebarCategory = (props) => {
  const [hideList, setHideList] = useState(true);
  const list = props.list;

  return (
      <div className="category">
        <h3 onClick={() => {setHideList(!hideList);}} className="category_text">{props.category_text}<div className={hideList? "category_text_arrow" : "category_text_arrow show"}></div></h3>
        <ul className="category_list">
          {hideList? null
          :
          list.map((item,i) => {
            return <li className='list_item' key={i}><Link className='list_item_link' to={item.url}>{item.name}</Link></li>
          })}
        </ul>
      </div>
  )
}
export default SidebarCategory;