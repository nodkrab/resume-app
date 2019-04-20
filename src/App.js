import React, { Component } from "react";

import star from "./star.svg";
import imgProfile from "./boy.svg";
import "./App.css";

// import { Alert } from "bootstrap-4-react";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 order-12 order-lg-11 text-center text-lg-left pt-3 pt-lg-0">
              <h1 className="name">
                <strong>KARIT KRAITO</strong>
              </h1>
              <h6>Everything jingle bell</h6>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-12 text-center">
              <img src={imgProfile} className="imgProfile" alt="logo" />
            </div>
          </div>
          <hr />
          <p className="text-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            aliquid officia saepe, doloremque suscipit officiis, esse a porro
            repellendus delectus aperiam labore nostrum temporibus sapiente
            amet? Debitis at omnis voluptatum. Quo nihil eius veniam hic
            pariatur asperiores modi obcaecati eos.{" "}
          </p>
        </section>
        <section className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h4>EXPERIENCE</h4>
              <hr />
              <h5 className="bgPink">Freelance Present-2005</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                voluptate quisquam sit, vel sapiente sequi facilis accusamus
                rerum dolorem quidem!
              </p>
              <h5 className="bgPink">RGB72 2005-2004</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                voluptate quisquam sit, vel sapiente sequi facilis accusamus
                rerum dolorem quidem!
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <h4>EDUCATION</h4>
              <hr />
              <h5>Bangkok university</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                voluptate quisquam sit, vel sapiente sequi facilis accusamus
                rerum dolorem quidem!
              </p>
              <h4>SKILL</h4>
              <hr />
              <ul className="list-group">
                <li>
                  <div className="row pt-3 pt-lg-0">
                    <div className="col-lg-4">HTML, CSS</div>
                    <div className="col-lg-8">
                      <i class="fas fa-star fa-sm" />
                      <i class="fas fa-star fa-sm" />
                      <i class="fas fa-star-half-alt" />
                      <i class="far fa-star fa-sm" />
                      <i class="far fa-star fa-sm" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row pt-3 pt-lg-0">
                    <div className="col-lg-4">JAVASCRIPT</div>
                    <div className="col-lg-8">
                      <i class="fas fa-star-half-alt" />
                      <i class="far fa-star fa-sm" />
                      <i class="far fa-star fa-sm" />
                      <i class="far fa-star fa-sm" />
                      <i class="far fa-star fa-sm" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row pt-3 pt-lg-0">
                    <div className="col-lg-4">COPY</div>
                    <div className="col-lg-8">
                      <i class="fas fa-star fa-sm" />
                      <i class="fas fa-star fa-sm" />
                      <i class="fas fa-star fa-sm" />
                      <i class="fas fa-star fa-sm" />
                      <i class="fas fa-star fa-sm" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 pt-3">
              <h4>CONTACT ME</h4>
              <hr />
              <div className="row text-center">
                <div className="col-lg-4">
                  <i class="fas fa-address-book fa-2x" />
                  <p className="pt-3">
                    Adress : 308/139 U delight residence pattankarn Rd, Suanlung
                    Bangkok 10250
                  </p>
                </div>
                <div className="col-lg-4">
                  <i class="fas fa-mobile fa-2x" />
                  <p className="pt-3">083-902-8592</p>
                </div>
                <div className="col-lg-4">
                  <i class="far fa-envelope-open fa-2x" />
                  <p className="pt-3">nodkrab@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
