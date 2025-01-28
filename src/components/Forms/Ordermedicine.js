import React, { useState, useEffect } from "react";
import  OrderImg  from "../../image/about2.png";

import AOS from "aos";
import axios from "axios";

const Ordermedicine = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: 'male',
    pincode: '',
    city: '',
    address: '',
  });

  useEffect(() => {
      AOS.init({
          duration: 3500, // Animation duration in milliseconds
          once:false
        });
        AOS.refresh();
  }, [AOS]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Construct the data object to match your Google Form input field names
    const formValues = new FormData();
    formValues.append('name', formData.name); // Replace 'entry.XXXXXX' with the form field IDs
    formValues.append('email', formData.email); // Replace 'entry.YYYYYY' with the field ID for email
    formValues.append('phone', formData.phone); // Similarly for other fields
    formValues.append('age', formData.age);
    formValues.append('gender', formData.gender);
    formValues.append('pincode', formData.pincode);
    formValues.append('city', formData.city);
    formValues.append('address', formData.address);

    console.log("formValues:");
    for (let [key, value] of formValues.entries()) {
      console.log(key, value);
    }
    //return

    try {

      const response = await axios.post("https://script.google.com/macros/s/AKfycbxxve7qnfQs0dgvbW9HErPPb1WVpbrZurdj5Evbxc0SeD0HDFV-JL5xAg6-NP58rbHjOA/exec", formValues, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <>
      <div className="container" id="ordermedicine" >
        <h1>Order Medicine</h1>
        <div className="row">
          <div className="col-md-6"  data-aos="fade-up-right"  data-aos-duration="3500">
            <form className="customeForm" method="post">
              <div className="row m-auto">
                <div class="mb-3 col-md-6">
                  <label class="form-label">
                  Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label  class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="row m-auto">
                <div class="mb-3 col-md-6">
                  <label class="form-label">
                  Phone No
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label  class="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label class="form-label">Gender</label>
                  <select class="form-control" value={formData.gender} onChange={handleChange}>
                    <option value="male"  selected>
                      Male
                    </option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              

              <div className="row m-auto">
                <div class="mb-3 col-md-6">
                  <label class="form-label">
                  Pin Code
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder=" Pin Code"
                    name="pincode"
                    value={formData.pincode}
                     onChange={handleChange}
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label  class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>



              <div class="mb-3">
                <label  class="form-label">
                 Address
                </label>
                <textarea
                  class="form-control"
                  cols="3"
                  rows="3"
                  style={{ resize: "none" }}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">Upload Prescription</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div className="text-center sendBtn">
                 <button onClick={handleSubmit} className=" btn btn-custom btn-lg"> Send  </button>

              </div>



             

            </form>
          </div>

          {/* for image Start*/}
          <div className="col-md-6" data-aos="fade-up-left"  data-aos-duration="3500">
            <img src={OrderImg} className="img-responsive" alt="" />{" "}
          </div>
          {/* for image End*/}
        </div>
      </div>
    </>
  );
};

export default Ordermedicine;
