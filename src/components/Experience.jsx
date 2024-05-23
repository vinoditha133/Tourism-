import React from 'react'
import expirience from "../assets/images/experience.png";
const Experience = () => {
  return (
    <div>
      <main className="bg-primary-subtle">
        <div className="b-example-divider"></div>
        <div className="container col-xxl-8 px-1 py-1">
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-md-6 col-sm-8 col-lg-6">
              <a
                href="#"
                className="btn btn-warning rounded-pill mt-5 mb-4 ps-4 pe-3 text-center"
              >
                experience
              </a>
              <h6 className="display-5 fw-normal text-body-emphasis lh-1 mb-3">
                with our all expirience we will serve you{" "}
              </h6>
              <p className="text-dark">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                repellat inventore odio vitae. Molestiae fugit deleniti mollitia
                ratione! Commodi vitae, excepturi officiis hic
              </p>
              <div className="row">
                <div className="col-md-2 ">
                  <div className="me-4 ms-2 p-4 pe-4 text-left bg-warning rounded">
                    {" "}
                    12k+
                  </div>
                  <span>Successfull Trips</span>
                </div>
                <div className="col-md-2">
                  <div className="me-4 ms-4 p-4 pe-4 text-left bg-warning rounded">
                    {" "}
                    2k+
                  </div>
                  <span>Regular client</span>
                </div>
                <div className="col-md-2">
                  <div className="me-4  ms-4 p-4 pe-4 text-left bg-warning rounded">
                    {" "}
                    15
                  </div>
                  <span>Years of expirience</span>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src={expirience} width="400" height="450" alt="loading" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Experience
