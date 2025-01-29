import React from "react";
import  loader  from '../image/loader.svg';

const Loading = () => {
  return (
    <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon"><img src={loader} alt=""/></div>
        </div>
    </div>
  );
};

export default Loading;
