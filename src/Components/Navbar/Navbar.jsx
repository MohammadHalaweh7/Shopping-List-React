import React, { useContext, useState } from "react";
import style from "./Navbar.module.css";
import { CounterContext } from "../CounterContext/CounterContext";
import Swal from "sweetalert2";

export default function Navbar() {
  const [data, setData] = useState([]);
  const { count } = useContext(CounterContext);
  let [totalPrice, setTotalPrice] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);
  const [statusInput, setStatusInput] = useState("nothing");

  function calculateTotalPrice(data) {
    let price = 0;
    for (let i = 0; i < data.length; i++) {
      price += data[i].counter * data[i].price;
    }
    setTotalPrice(price);
  }

  function addToBill(addition) {
    totalPrice = totalPrice + addition;
    setTotalPrice(totalPrice);
  }

  function subFromBill(addition) {
    totalPrice = totalPrice - addition;
    setTotalPrice(totalPrice);
  }

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
                calculateTotalPrice(localStorageParsed);
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
          {isCheckout == true ? (
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Checkout
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setStatusInput("submit");

                    await new Promise((res, rej) => {
                      setTimeout(() => {
                        res(
                          `Thanks ${
                            document.getElementById("username").value
                          }, We Will message you on ${
                            document.getElementById("email").value
                          }`
                        );
                      }, 1000);
                    }).then((res) => {
                      Swal.fire("Good Job!", res, "success");
                      setStatusInput("nothing");
                      setTimeout(() => {
                        window.location.reload();
                      }, 2500);
                    });
                  }}
                >
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Full Name
                    </label>
                    <input
                      disabled={statusInput == "submit"}
                      type="text"
                      class="form-control"
                      id="username"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      disabled={statusInput == "submit"}
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">count</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((ele, key) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <img
                                  width={100}
                                  height={100}
                                  src={ele.img}
                                ></img>
                              </td>
                              <td>{ele.name}</td>
                              <td>{ele.price}</td>
                              <td>{ele.counter}</td>
                              <td>{ele.counter * ele.price}</td>
                            </tr>
                          </>
                        );
                      })}
                      <tr></tr>
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end">
                    <button
                      disabled={statusInput == "submit"}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <div className="me-auto">
                  <h3>Total Price: {totalPrice}$</h3>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    setIsCheckout(false);
                  }}
                >
                  Cart
                </button>
              </div>
            </div>
          ) : (
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
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((ele, key) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <img width={100} height={100} src={ele.img}></img>
                            </td>
                            <td>{ele.name}</td>
                            <td>{ele.price}</td>
                            <td>
                              <input
                                min={1}
                                max={9}
                                onChange={(e) => {
                                  console.log(e);

                                  if (ele.counter > e.target.value) {
                                    ele.counter = e.target.value;
                                    subFromBill(ele.price);
                                  } else if (ele.counter < e.target.value) {
                                    ele.counter = e.target.value;
                                    addToBill(ele.price);
                                  }
                                }}
                                defaultValue={ele.counter}
                                type="number"
                              ></input>
                            </td>
                            <td>
                              <button
                                onClick={() => {
                                  let newData = data.filter(
                                    (element) => element.name !== ele.name
                                  );
                                  setData(newData);
                                  calculateTotalPrice(newData);
                                }}
                                type="button"
                                class="btn btn-danger"
                              >
                                <i class="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <tr></tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <div className="me-auto">
                  <h3>Total Price: {totalPrice}$</h3>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    setIsCheckout(true);
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
