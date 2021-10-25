import React from "react";
import "./LandingPage.css";
const myImageList = [
  "https://source.unsplash.com/LAaSoL0LrYs/1920x1080",
  "https://source.unsplash.com/bF2vsubyHcQ/1920x1080",
  "https://source.unsplash.com/szFUQoyvrxM/1920x1080",
];
function LandingPage({ imageList = myImageList }) {
  return (
    <div id="carousel_1" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imageList.map((image, id) => {
          const className = "carousel-item" + (id === 0 ? " active" : "");
          return (
            <div className={className}>
              <img src={image} className="d-block w-100" alt="..." />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel_1"
        data-bs-slide="prev"
      >
        {/* <span className="carousel-control-prev-icon" aria-hidden="true">
        </span> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel_1"
        data-bs-slide="next"
      >
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default LandingPage;
