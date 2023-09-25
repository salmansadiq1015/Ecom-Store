import React from "react";
import "./home.css";

export default function HomeSlider() {
  return (
    <>
      <div className="home-slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/11home.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/Home1.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/13.jpg"
                className="d-block w-100"
                alt="..."
                style={{ height: "100%" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <div className="slider-content">
          <h3>Ecommerce Store</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatem temporibus cumque reprehenderit nesciunt quas sed iste
            quo minus nobis.
          </p>
          <button>Details</button>
        </div>
        <div className="sale-border">
          <p>New Year Sale 2024 | Every Product 10% Discount</p>
        </div> */}
      </div>
    </>
  );
}
