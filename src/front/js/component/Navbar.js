import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Single } from "../pages/single";
import "../../styles/nav.css";

console.log("prueba", process.env.TEST);

export const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
  };
  console.log(store.isLogged);

  return (
    <nav className="navbar-dark bg-dark">
      <div className="d-flex flex-row container">
        <div className="col-lg-2 ">
          <Link to={`/`} className="navbar-brand text-white">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNjRiNWY2IiBkPSJNMzcsMzZIMTdjLTIuNzYxLDAtNS0yLjIzOS01LTVWMTFjMC0yLjc2MSwyLjIzOS01LDUtNWgyMGMyLjc2MSwwLDUsMi4yMzksNSw1djIwIEM0MiwzMy43NjEsMzkuNzYxLDM2LDM3LDM2eiBNMjEsMzBoMTRWMTguNWMwLTMuMDM4LTIuNDYyLTUuNS01LjUtNS41SDE4djE0QzE4LDI4LjY1NywxOS4zNDMsMzAsMjEsMzB6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZiOGMwMCIgZD0iTTMxLDQySDExYy0yLjc2MSwwLTUtMi4yMzktNS01VjE3YzAtMi43NjEsMi4yMzktNSw1LTVoMjBjMi43NjEsMCw1LDIuMjM5LDUsNXYyMCBDMzYsMzkuNzYxLDMzLjc2MSw0MiwzMSw0MnogTTE3LjUsMzZIMzBWMjFjMC0xLjY1Ny0xLjM0My0zLTMtM0gxNWMtMS42NTcsMC0zLDEuMzQzLTMsM3Y5LjVDMTIsMzMuNTM4LDE0LjQ2MiwzNiwxNy41LDM2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM2NGI1ZjYiIGQ9Ik0zNiwyNnYxYzAsMS42NTctMS4zNDMsMy0zLDNIMjN2NmgxNGMyLjc1LDAsNS0yLjI1LDUtNXYtNUgzNnoiPjwvcGF0aD48L3N2Zz4="
            />
            FIERAS
          </Link>
        </div>

        <div className=" col-lg-6" id="navbarNav">
          <ul className="d-flex flex-row justify-content-center">
            <li className="nav-item">
              <NavLink
                to={`/`}
                activeClassName="fw-bold text-decoration-underline"
                className="nav-link text-white"
                exact={true}
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/catmen/`}
                activeClassName="nav-link text-white"
                className="nav-link text-white"
              >
                Men
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={`/catwomen/`}
                activeClassName="nav-link text-white"
                className="nav-link text-white"
              >
                Women
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 d-flex flex-column align-items-end justify-content-center ">
          <form
            className="d-flex topIcons dropdown "
            onSubmit={handleSubmit}
            noValidate
          >
            <a
              type="button"
              id="dropdownLoginUsuario"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle  loginIcon "></i>
            </a>
            <div
              className="dropdown-menu loginContainer "
              aria-labelledby="dropdownLoginUsuario"
            >
              <div className="d-flex justify-content-between d-grid gap-2">
                <h3>Sign in</h3>
                <a className=" text-right mt-2">Sign up</a>
              </div>

              <div className="form-floating form-group mt-3 ">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating form-group mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label htmlFor="floatingPassword">Password*</label>
              </div>

              <div className="invisible forgot-password text-right mt-2">
                <Link to="#">You forgot,right?</Link>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-lg-1 d-flex flex-column align-items-end justify-content-center">
          <button
            className="btn btn-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="bi bi-cart-check-fill"></i>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header ">
              <div className="row">
                <div className="col-lg-12 ">
                  <h5 className="text-center" id="offcanvasRightLabel">Shopping bag</h5>
                </div>
              </div>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className=" mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://i.pinimg.com/564x/fc/bd/0b/fcbd0b732979c42803add1ce7f1d299b.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="row card-body">
                      <div className="col-lg-6">
                        <h5 className="card-title">Title</h5>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-end">
                        <i className="bi bi-trash"></i>
                      </div>
                      <div className="col-lg-6">
                        <p className="card-text text-muted">Size:</p>
                      </div>
                      <div className="col-lg-6">
                        <p className="card-text text-muted d-flex justify-content-end">S</p>
                      </div>
                      <div className="col-lg-6 p-2 bd-highlight">
                        <p className="card-text">
                          <small className="text-muted">Amount: 1</small>
                        </p>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-end p-2 bd-highlight">
                        <p className="card-text">
                          <small className="text-muted">$000.000</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="offcanvas-body d-flex align-items-end">
              <div className="mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-lg-6">
                    <p className="card-title text-muted">Subtotal</p>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                    <p className="card-title text-muted">$000.000</p>
                  </div>

                  <div className="col-lg-6">
                    <p className="card-title text-muted">Shipping</p>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                    <p className="card-title text-muted">$000.000</p>
                  </div>
                  <div className="col-lg-6">
                    <h6 className="card-title">Total</h6>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                    <h6 className="card-title">$000.000</h6>
                  </div>
                  <div className="col-lg-12  text-center">
                    <Link to={"/single/"} className="btn btn-dark bottom-10">
                       Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
