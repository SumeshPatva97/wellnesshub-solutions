import React, { useState, useEffect , useRef} from "react";
import  OrderImg  from "../../image/about2.png";

import Upload from "../../image/upload.svg";
import DeleteIcon from "../../image/deleteIcon.svg";

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
    image: "",
  });
  const [file, setFile] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
      AOS.init({
          duration: 3500, // Animation duration in milliseconds
          once:false
        });
        AOS.refresh();
  }, [AOS]);


  // const handleChange = (e) => {
  //   if (e.target.name === "file") {
  //     setFile(e.target.files[0]); 
  //   } else {
  //     setFormData({ ...formData, image: e.target.value });
  //   }  
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const inputRef = useRef(null);

  const openFileInput = () => {
    inputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to handle image drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevValue) => ({
          ...prevValue,
          image: value,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prevValue) => ({
            ...prevValue,
            image: {
              file: file,
              base64: reader.result,
            },
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert(`${file.name} is not an image.\nOnly jpeg, png, jpg files can be uploaded`);
        e.target.value = null;
      }
    }
  };
  const handleDeleteImage = (e) => {
    e.stopPropagation();
    const fileInput = document.getElementById("filesBanner");
    if (fileInput) {
      fileInput.value = "";
    }

    setFormData((prevValue) => ({
      ...prevValue,
      image: {
        file: null,
        base64: null,
      },
    }));
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

    if (file) {
      formValues.append("file", file); // Append the uploaded file
    }
    // for (let [key, value] of formValues.entries()) {
    //   console.log(key, value);
    // }
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
            <form className="customeForm" method="post" enctype="multipart/form-data">
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

              <div class="mb-3 d-flex flex-column">
                <label for="formFile" class="form-label">Upload Prescription</label>
              <div
              className={`h-[80px] d-flex items-center border justify-center border-2 border-dashed border-[#ccc] bg-white rounded-lg mt-2  defaultDrag_div`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={openFileInput}
              style={{
                cursor: "pointer",
                position: "relative",
                height: "100px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                overflow: "hidden",
                borderRadius:"0.375rem"
              }}
            >
              {formData.image && formData.image.base64 ? (
                <>
                  <span
                    className="delete-image-icon img-DeleteIcon"
                    onClick={handleDeleteImage}
                    style={{
                      position: "absolute",
                      top: "7px",
                      right: "7px",
                    }}
                  >
                    <img src={DeleteIcon} alt="delete-icon" />
                  </span>
                  <img
                    src={formData.image.base64}
                    alt="Preview"
                    className="default-img"
                    style={{
                      height: "auto",
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                </>
              ) : (
                <div className="flex-column m-auto">
                  <img
                    src={Upload}
                    style={{ display: "translate(2.5rem, 0px)",display: "flex", alignItems:"center" , margin:"auto"}}
                    alt="Default"
                  />
                  <span style={{ color: "#6A6A6A" }}>Upload Prescription</span>
                </div>
              )}
              <div className="q-add-categories-single-input">
                <input
                  type="file"
                  id="filesBanner"
                  name="image"
                  accept="image/*"
                  ref={inputRef}
                  className="default-img-inputfield"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
              </div>


              <div className="text-center sendBtn">
                 <button onClick={handleSubmit} className=" btn btn-custom btn-lg"> Send  </button>

              </div>



             

            </form>
          </div>

          {/* for image Start*/}
          <div className="col-md-6" data-aos="fade-up-left"  data-aos-duration="3500">
            <img src={OrderImg} className="img-responsive OrderImg" alt="" />{" "}
          </div>
          {/* for image End*/}
        </div>
      </div>
    </>
  );
};

export default Ordermedicine;
