import React from "react";
const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-cart"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);
const WishlistIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-heart"
    viewBox="0 0 16 16"
  >
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
  </svg>
);
const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-box-arrow-left"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
    />
    <path
      fill-rule="evenodd"
      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
    />
  </svg>
);
const Header1 = ({ categories = [] }) => {
  // const { isAuthenticated, user } = context.auth;
  const isAuthenticated = false;
  const authLinks = (
    <ul className="d-flex navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">
          <CartIcon /> Cart
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <WishlistIcon /> Wishlist
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <LogoutIcon /> Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="d-flex navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          SignUp
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          E-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {categories.map((item, index) => {
              const isActive = index === 0;
              return (
                <li className="nav-item">
                  {isActive ? (
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={item.url}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a className="nav-link" href={item.url}>
                      {item.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};
export default function Header() {
  const categories = [
    {
      name: "Men",
      url: "#",
    },
    {
      name: "Women",
      url: "#",
    },
    {
      name: "Kids",
      url: "#",
    },
  ];

  return <Header1 categories={categories} />;
}