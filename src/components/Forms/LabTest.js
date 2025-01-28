import React from "react";

const LabTest = () => {
  const handleSubmit = async (e) => {
    console.log("xbxcbbx")
  }
  return (
    <>
      <div className="container" id="LabTest">
        <h1>Lab Test</h1>
        <div className="row">
          
          {/* for image Start*/}
          <div className="col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          {/* for image End*/}

          <div className="col-md-6">
            <form className="customeForm">
              <div className="row m-auto">
                <div class="mb-3 col-md-6">
                  <label class="form-label">
                  Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
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
                  />
                </div>
                <div class="mb-3 col-md-3">
                  <label class="form-label">Gender</label>
                  <select class="form-control">
                    <option value="male" selected>
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
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">Upload Prescription</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div className="">
                 <button onClick={handleSubmit} className=" btn btn-custom btn-lg"> Send  </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabTest;
