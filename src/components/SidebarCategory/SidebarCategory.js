import {React, useState} from 'react';
import {Link} from "react-router-dom";
import "../../assets/scss/components/sidebarcategory/sidebarcategory.css";
const SidebarCategory = (props) => {
  const [hideList, setHideList] = useState(true);
  const list = props.list;

  return (
      <div className="category">
        <h3 onClick={() => {setHideList(!hideList);}} className="category_text">{props.category_text}<div className={hideList? "category_text_arrow" : "category_text_arrow show"}></div></h3>
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