import React from "react";

const Goals = (props) => {
  return (
    <div id="goals" className="text-center">
      <div className="container d-flex flex-column">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Goals</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Goals;