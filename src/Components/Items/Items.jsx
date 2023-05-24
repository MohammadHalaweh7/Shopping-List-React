import React, { useContext, useState } from "react";
import style from "./Items.module.css";
import Swal from "sweetalert2";
import { CounterContext } from "../CounterContext/CounterContext";

export default function Items() {
  const [state, setState] = useState("done");
  const [cartItems, setCartItems] = useState([]);
  const { increase } = useContext(CounterContext);

  const [products, setProducts] = useState([
    { id: 0, name: "Product 1", price: "20$", img: "assets/imgs/11.jpg" },
    { id: 1, name: "Product 2", price: "10$", img: "assets/imgs/22.jpg" },
    { id: 2, name: "Product 3", price: "50$", img: "assets/imgs/33.jpg" },
    { id: 3, name: "Product 4", price: "20$", img: "assets/imgs/55.jpg" },
    { id: 4, name: "Product 5", price: "20$", img: "assets/imgs/66.jpg" },
    { id: 5, name: "Product 6", price: "40$", img: "assets/imgs/44.jpg" },
    { id: 6, name: "Product 7", price: "20$", img: "assets/imgs/11.jpg" },
    { id: 7, name: "Product 8", price: "50$", img: "assets/imgs/33.jpg" },
  ]);
  return (
    <div className="container">
      <h2 className="text-center py-5">Products</h2>
      <div className="row">
        {products.map((ele, key) => (
          <div className="col-md-3 d-flex flex-column align-items-center my-4">
            <div className="card">
              <img
                className="card-img-top"
                src={ele.img}
                alt={ele.name}
                style={{ height: "400px", objectFit: "cover", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p>{ele.price}</p>
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
                      const id = key;
                      const found = cartItems.find((product) => {
                        return products[id].name === product.name;
                      });

                      if (found) {
                        found.counter += 1;
                      } else {
                        setCartItems([
                          ...cartItems,
                          {
                            name: products[key].name,
                            price: products[key].price,
                            img: products[key].img,
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
            {increase()}
          </div>
        ))}
      </div>
    </div>
  );
}
