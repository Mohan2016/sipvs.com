// import "../RegisterSection.css";

export default function RegisterSection() {
  return (
    <section className="register-section pt-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT COLUMN */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="left-box p-4">

              <h2 className="text-white text-center fw-bold mb-3">
                Get A Free <span className="text-warning">Online Courses</span>
              </h2>

              <p className="text-white mb-4">
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything hidden in the middle of text.
              </p>

              <form className="form-area">
                <div className="row">
                  
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Enter Name *" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input type="email" className="form-control" placeholder="Enter Email *" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input type="tel" className="form-control" placeholder="Enter Phone No *" maxLength="10" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <select className="form-control">
                      <option value="">Select Course</option>
                      <option>Typing</option>
                      <option>Primary Teacher Training</option>
                      <option>Fashion Designing</option>
                      <option>Computer Training</option>
                      <option>Interior Designing</option>
                      <option>Fine Arts</option>
                    </select>
                  </div>

                  <div className="col-md-12 mb-3">
                    <textarea className="form-control" rows="4" placeholder="Message *"></textarea>
                  </div>

                  <div className="col-md-12">
                    <button className="btn btn-warning w-100 fw-bold">
                      Register Now
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src="../images/girl.png"
              alt="student"
              className="img-fluid student-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
