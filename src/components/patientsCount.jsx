import React from "react";
import CountUp from "react-countup";


const PatientsCount = (props) => {
  return (
    <div id="patientsCount">
      <div className="container">
        <div className="row m-auto">
          <div className="col-xs-12 col-md-4 ">
            <h3>Total Customer Savings <br/> &#8377;<CountUp end={27150987} enableScrollSpy={true} />
            <span className="countSign">+</span> </h3>
          </div>
          <div className="col-xs-12 col-md-4">
            <h3>Patients Served <br/><CountUp end={200000} enableScrollSpy={true} />
            <span className="countSign">+</span></h3>
          </div>
          <div className="col-xs-12 col-md-4 ">
            <h3>Pincode Serving (Pan India)  <br/>
            <CountUp end={20000} enableScrollSpy={true} />
            <span className="countSign">+</span> </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientsCount;
