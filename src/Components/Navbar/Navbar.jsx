import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { CounterContext } from "../CounterContext/CounterContext";

export default function Navbar() {
  const [data, setData] = useState([]);
  const { count } = useContext(CounterContext);

  useEffect(() => {
    const localStorageString = localStorage.getItem("cart");
    const localStorageParsed = JSON.parse(localStorageString);
    setData(localStorageParsed);
  }, []);

  return (
    <nav
      className={` navbar navbar-expand-lg bg-body-tertiary ${style.container} `}
    >
      <div className="container-fluid">
        <a className={`navbar-brand ${style.title}`} href="#">
          Shopping List
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Shop
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className={`d-flex ${style.icons}`}>
            <div
              onClick={() => {
                const localStorageString = localStorage.getItem("cart");
                const localStorageParsed = JSON.parse(localStorageString);
                setData(localStorageParsed);
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fa-solid fa-cart-shopping"></i>
              <div className={`${style["notification-cart"]}`}>{count}</div>
            </div>

            <div>
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ele, key) => (
                    <tr key={key}>
                      <td>
                        <img
                          width={100}
                          height={100}
                          src={ele.img}
                          alt={ele.name}
                        />
                      </td>
                      <td>{ele.name}</td>
                      <td>{ele.price}</td>
                      <td>
                        <input defaultValue={ele.counter} type="number"></input>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
