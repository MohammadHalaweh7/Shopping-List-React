import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CounterContext } from "../CounterContext/CounterContext";

export default function Product({ product, key }) {
  let [state, setState] = useState("done");
  let [cartItems, setCartItems] = useState([]);
  let { increase } = useContext(CounterContext);

  return (
    <div className="col-md-3 d-flex flex-column align-items-center my-4">
      <div className="card">
        <img
          className="card-img-top"
          src={product.img}
          alt={product.name}
          style={{ height: "400px", objectFit: "cover", width: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p>{product.price}</p>
        </div>

        <button
          class="btn btn-primary"
          onClick={async (e) => {
            setState("sent");
            await new Promise((res, rej) => {
              setTimeout(() => {
                res("Element Added To The Cart!");
              }, 1000);
            })
              .then((res) => {
                let id = key;
                let found = cartItems.find((product) => {
                  return product[id].name === product.name;
                });

                if (found) {
                  found.counter += 1;
                } else {
                  setCartItems([
                    ...cartItems,
                    {
                      name: product.name,
                      price: product.price,
                      img: product.img,
                      counter: 1,
                    },
                  ]);
                }

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: res,
                  showConfirmButton: false,
                  timer: 1100,
                });
                setState("done");
              })
              .catch((rej) => {
                console.log(rej);
              });
            increase()
          }}
        >
          {state == "done" ? (
            <i>Add Cart</i>
          ) : (
            <div class="spinner-border text-primary" role="status"></div>
          )}
        </button>
      </div>
      {localStorage.setItem("cart", JSON.stringify(cartItems))}
    </div>
  );
}
