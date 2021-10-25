import React from "react";
import "./LandingPage.css";
const myImageList = [
  "https://raw.githubusercontent.com/amanr11314/ecommerce/main/slider-img-01.jpg",
  "https://raw.githubusercontent.com/amanr11314/ecommerce/main/slider-img-02.jpg",
  "https://raw.githubusercontent.com/amanr11314/ecommerce/main/slider-img-03.jpg",
];
const TruckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="#FFA500"
    class="bi bi-truck"
    viewBox="0 0 16 16"
  >
    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
  </svg>
);
const SmileyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#FFA500"
    class="bi bi-emoji-smile"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#FFA500"
    class="bi bi-shield-check"
    viewBox="0 0 16 16"
  >
    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
  </svg>
);

const sliderFooterItems = [
  {
    item: <TruckIcon />,
    title: "Free Shipping",
    subtitle: "On purchases over $199",
  },
  {
    item: <SmileyIcon />,
    title: "99% Satisfied Customers",
    subtitle: "Our clients' opinions speak for themselves",
  },
  {
    item: <ShieldIcon />,
    title: "Originality Guaranteed",
    subtitle: "30 days warranty for each product from our store",
  },
];

const IconWrapper = ({ children }) => (
  <div className="icon-wrapper-custom">
    <span>{children}</span>
  </div>
);
function LandingPage({ imageList = myImageList }) {
  return (
    <>
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
      <div className="d-none d-lg-block d-xl-block custom-slider-footer">
        <div
          class="row d-none d-lg-flex d-xl-flex display: flex;
  align-items-start justify-content-end pt-4"
        >
          {sliderFooterItems.map(({ item, title, subtitle }) => {
            return (
              <div class="col">
                <div className="container">
                  <div className="row">
                    <IconWrapper>{item}</IconWrapper>
                    <div className="col">
                      <h6>{title}</h6>
                      <span className="text-secondary">{subtitle}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
