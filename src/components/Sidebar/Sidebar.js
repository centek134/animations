import React from "react";
import "../../assets/scss/components/sidebar/sidebar.css";
import SidebarCategory from '../SidebarCategory/SidebarCategory';
import {Link} from "react-router-dom";
const Sidebar = (props) => {
  const animations_list = [{name: "Menu Animated", url:"menu-animated"},{name:"Cube", url:"cube"}];
  return (
    <nav className="side-nav">
      <header className="logo">
          <svg viewBox="0 0 162 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
          <path id="animations" d="M30.0653 41H27.6648L34.608 22.0909H36.9716L43.9148 41H41.5142L35.8636 25.0824H35.7159L30.0653 41ZM30.9517 33.6136H40.6278V35.6449H30.9517V33.6136ZM55.093 34.4375V41H53.4169V30.0909H55.0362V31.7955H55.1783C55.4339 31.2415 55.8222 30.7964 56.343 30.4602C56.8639 30.1193 57.5362 29.9489 58.3601 29.9489C59.0987 29.9489 59.745 30.1004 60.299 30.4034C60.853 30.7017 61.2839 31.1562 61.5916 31.767C61.8994 32.3731 62.0533 33.1402 62.0533 34.0682V41H60.3771V34.1818C60.3771 33.3248 60.1546 32.6572 59.7095 32.179C59.2644 31.696 58.6536 31.4545 57.8771 31.4545C57.3421 31.4545 56.8639 31.5705 56.4425 31.8026C56.0258 32.0346 55.6967 32.3731 55.4553 32.8182C55.2138 33.2633 55.093 33.803 55.093 34.4375ZM65.1161 41V30.0909H66.7923V41H65.1161ZM65.9684 28.2727C65.6417 28.2727 65.36 28.1615 65.1232 27.9389C64.8912 27.7164 64.7752 27.4489 64.7752 27.1364C64.7752 26.8239 64.8912 26.5563 65.1232 26.3338C65.36 26.1113 65.6417 26 65.9684 26C66.2951 26 66.5745 26.1113 66.8065 26.3338C67.0432 26.5563 67.1616 26.8239 67.1616 27.1364C67.1616 27.4489 67.0432 27.7164 66.8065 27.9389C66.5745 28.1615 66.2951 28.2727 65.9684 28.2727ZM69.8622 41V30.0909H71.4815V31.7955H71.6236C71.8509 31.2131 72.2178 30.7609 72.7244 30.4389C73.2311 30.1122 73.8395 29.9489 74.5497 29.9489C75.2694 29.9489 75.8684 30.1122 76.3466 30.4389C76.8295 30.7609 77.206 31.2131 77.4759 31.7955H77.5895C77.8688 31.232 78.2879 30.7846 78.8466 30.4531C79.4053 30.117 80.0753 29.9489 80.8565 29.9489C81.8319 29.9489 82.6297 30.2543 83.25 30.8651C83.8703 31.4711 84.1804 32.4157 84.1804 33.6989V41H82.5043V33.6989C82.5043 32.8939 82.2841 32.3187 81.8438 31.973C81.4034 31.6274 80.8849 31.4545 80.2884 31.4545C79.5213 31.4545 78.9271 31.6866 78.5057 32.1506C78.0843 32.6098 77.8736 33.1922 77.8736 33.8977V41H76.169V33.5284C76.169 32.9081 75.9678 32.4086 75.5653 32.0298C75.1629 31.6463 74.6444 31.4545 74.0099 31.4545C73.5743 31.4545 73.1671 31.5705 72.7884 31.8026C72.4143 32.0346 72.1113 32.3565 71.8793 32.7685C71.652 33.1757 71.5384 33.6468 71.5384 34.1818V41H69.8622ZM90.4553 41.2557C89.764 41.2557 89.1366 41.1255 88.5732 40.8651C88.0097 40.5999 87.5623 40.2188 87.2308 39.7216C86.8994 39.2197 86.7337 38.6136 86.7337 37.9034C86.7337 37.2784 86.8568 36.7718 87.103 36.3835C87.3492 35.9905 87.6783 35.6828 88.0902 35.4602C88.5021 35.2377 88.9567 35.072 89.4538 34.9631C89.9557 34.8494 90.46 34.7595 90.9666 34.6932C91.6295 34.608 92.1669 34.544 92.5788 34.5014C92.9955 34.4541 93.2985 34.3759 93.4879 34.267C93.6821 34.1581 93.7791 33.9687 93.7791 33.6989V33.642C93.7791 32.9413 93.5874 32.3968 93.2038 32.0085C92.825 31.6203 92.2498 31.4261 91.478 31.4261C90.6778 31.4261 90.0504 31.6013 89.5959 31.9517C89.1413 32.3021 88.8217 32.6761 88.6371 33.0739L87.0462 32.5057C87.3303 31.8428 87.709 31.3267 88.1825 30.9574C88.6607 30.5833 89.1816 30.3229 89.745 30.1761C90.3132 30.0246 90.8719 29.9489 91.4212 29.9489C91.7715 29.9489 92.174 29.9915 92.6286 30.0767C93.0878 30.1572 93.5305 30.3253 93.9567 30.581C94.3875 30.8366 94.745 31.2225 95.0291 31.7386C95.3132 32.2547 95.4553 32.946 95.4553 33.8125V41H93.7791V39.5227H93.6939C93.5803 39.7595 93.3909 40.0128 93.1257 40.2827C92.8606 40.5526 92.5078 40.7822 92.0675 40.9716C91.6271 41.161 91.0897 41.2557 90.4553 41.2557ZM90.7109 39.75C91.3738 39.75 91.9325 39.6198 92.3871 39.3594C92.8464 39.099 93.192 38.7628 93.424 38.3509C93.6607 37.9389 93.7791 37.5057 93.7791 37.0511V35.517C93.7081 35.6023 93.5518 35.6804 93.3104 35.7514C93.0736 35.8177 92.799 35.8769 92.4865 35.929C92.1787 35.9763 91.8781 36.0189 91.5845 36.0568C91.2957 36.09 91.0613 36.1184 90.8814 36.142C90.4458 36.1989 90.0386 36.2912 89.6598 36.419C89.2857 36.5421 88.9827 36.7292 88.7507 36.9801C88.5234 37.2263 88.4098 37.5625 88.4098 37.9886C88.4098 38.571 88.6252 39.0114 89.0561 39.3097C89.4917 39.6032 90.0433 39.75 90.7109 39.75ZM103.259 30.0909V31.5114H97.6055V30.0909H103.259ZM99.2532 27.4773H100.929V37.875C100.929 38.3485 100.998 38.7036 101.135 38.9403C101.277 39.1723 101.457 39.3286 101.675 39.4091C101.898 39.4848 102.132 39.5227 102.378 39.5227C102.563 39.5227 102.714 39.5133 102.833 39.4943C102.951 39.4706 103.046 39.4517 103.117 39.4375L103.458 40.9432C103.344 40.9858 103.185 41.0284 102.982 41.071C102.778 41.1184 102.52 41.142 102.208 41.142C101.734 41.142 101.27 41.0402 100.816 40.8366C100.366 40.633 99.9918 40.3229 99.6935 39.9062C99.4 39.4896 99.2532 38.964 99.2532 38.3295V27.4773ZM105.78 41V30.0909H107.456V41H105.78ZM106.632 28.2727C106.306 28.2727 106.024 28.1615 105.787 27.9389C105.555 27.7164 105.439 27.4489 105.439 27.1364C105.439 26.8239 105.555 26.5563 105.787 26.3338C106.024 26.1113 106.306 26 106.632 26C106.959 26 107.239 26.1113 107.471 26.3338C107.707 26.5563 107.826 26.8239 107.826 27.1364C107.826 27.4489 107.707 27.7164 107.471 27.9389C107.239 28.1615 106.959 28.2727 106.632 28.2727ZM114.958 41.2273C113.973 41.2273 113.109 40.9929 112.366 40.5241C111.627 40.0554 111.049 39.3996 110.633 38.5568C110.221 37.714 110.015 36.7292 110.015 35.6023C110.015 34.4659 110.221 33.474 110.633 32.6264C111.049 31.7789 111.627 31.1207 112.366 30.652C113.109 30.1832 113.973 29.9489 114.958 29.9489C115.943 29.9489 116.805 30.1832 117.543 30.652C118.287 31.1207 118.864 31.7789 119.276 32.6264C119.693 33.474 119.901 34.4659 119.901 35.6023C119.901 36.7292 119.693 37.714 119.276 38.5568C118.864 39.3996 118.287 40.0554 117.543 40.5241C116.805 40.9929 115.943 41.2273 114.958 41.2273ZM114.958 39.7216C115.706 39.7216 116.322 39.5298 116.805 39.1463C117.288 38.7628 117.645 38.2585 117.877 37.6335C118.109 37.0085 118.225 36.3314 118.225 35.6023C118.225 34.8731 118.109 34.1937 117.877 33.5639C117.645 32.9342 117.288 32.4252 116.805 32.0369C116.322 31.6487 115.706 31.4545 114.958 31.4545C114.21 31.4545 113.594 31.6487 113.112 32.0369C112.629 32.4252 112.271 32.9342 112.039 33.5639C111.807 34.1937 111.691 34.8731 111.691 35.6023C111.691 36.3314 111.807 37.0085 112.039 37.6335C112.271 38.2585 112.629 38.7628 113.112 39.1463C113.594 39.5298 114.21 39.7216 114.958 39.7216ZM124.136 34.4375V41H122.46V30.0909H124.079V31.7955H124.221C124.477 31.2415 124.865 30.7964 125.386 30.4602C125.907 30.1193 126.579 29.9489 127.403 29.9489C128.142 29.9489 128.788 30.1004 129.342 30.4034C129.896 30.7017 130.327 31.1562 130.635 31.767C130.942 32.3731 131.096 33.1402 131.096 34.0682V41H129.42V34.1818C129.42 33.3248 129.198 32.6572 128.752 32.179C128.307 31.696 127.697 31.4545 126.92 31.4545C126.385 31.4545 125.907 31.5705 125.485 31.8026C125.069 32.0346 124.74 32.3731 124.498 32.8182C124.257 33.2633 124.136 33.803 124.136 34.4375ZM141.886 32.5341L140.381 32.9602C140.286 32.7093 140.146 32.4654 139.962 32.2287C139.782 31.9872 139.536 31.7884 139.223 31.6321C138.911 31.4759 138.51 31.3977 138.023 31.3977C137.355 31.3977 136.799 31.5516 136.354 31.8594C135.913 32.1624 135.693 32.5483 135.693 33.017C135.693 33.4337 135.845 33.7628 136.148 34.0043C136.451 34.2457 136.924 34.447 137.568 34.608L139.188 35.0057C140.163 35.2424 140.89 35.6046 141.368 36.0923C141.846 36.5753 142.085 37.1979 142.085 37.9602C142.085 38.5852 141.905 39.1439 141.545 39.6364C141.19 40.1288 140.693 40.517 140.054 40.8011C139.415 41.0852 138.671 41.2273 137.824 41.2273C136.711 41.2273 135.79 40.9858 135.061 40.5028C134.332 40.0199 133.87 39.3144 133.676 38.3864L135.267 37.9886C135.419 38.5758 135.705 39.0161 136.126 39.3097C136.553 39.6032 137.109 39.75 137.795 39.75C138.577 39.75 139.197 39.5843 139.656 39.2528C140.12 38.9167 140.352 38.5142 140.352 38.0455C140.352 37.6667 140.22 37.3494 139.955 37.0938C139.689 36.8333 139.282 36.6392 138.733 36.5114L136.915 36.0852C135.916 35.8485 135.182 35.4815 134.713 34.9844C134.249 34.4825 134.017 33.8551 134.017 33.1023C134.017 32.4867 134.19 31.9422 134.536 31.4688C134.886 30.9953 135.362 30.6236 135.963 30.3537C136.569 30.0838 137.256 29.9489 138.023 29.9489C139.102 29.9489 139.95 30.1856 140.565 30.6591C141.186 31.1326 141.626 31.7576 141.886 32.5341Z" fill="black"/>
          <rect id="square" x="23.5" y="19.5" width="25" height="25" stroke="#ffffff"/>
          <path id="polygon" d="M49 58.8599L1.02353 32L49 5.14015L49 58.8599Z" stroke="#ffffff"/>
            </g>
          </svg>
      </header>
      <div className="sidebar_list">
        <Link className="home_page_link" to={"/"}>Home Page</Link>
        <SidebarCategory list = {animations_list} category_text="3D Animations"/>
      </div>
    </nav>
  );
};
export default Sidebar;