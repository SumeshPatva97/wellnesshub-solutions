import React from 'react';
import NotFoundImg from "../image/404-error-img.png";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={NotFoundImg} alt="Not Found" className="not-found-image" />
    </div>
  );
};

export default NotFound;
