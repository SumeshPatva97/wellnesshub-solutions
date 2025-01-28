import React from "react";


 const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-6 col-md-3">
                  <img src={d.icon} alt="..." className="team-img icons" />
                  <div className="service-desc">
                  {/* <h3  dangerouslySetInnerHTML={{
                        __html: d.title,
                      }}
                    ></h3> */}
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
export default Services;