import React, { useState } from "react";
import style from './Items.module.css'
import Product from "./Product";
export default function Items() {
    const [products, setProducts] = useState([
        { id: 0, name: "Product 1", price:"20$", img: "assets/imgs/11.jpg" },
        { id: 1, name: "Product 2", price:"10$", img: "assets/imgs/22.jpg" },
        { id: 2, name: "Product 3", price:"50$", img: "assets/imgs/33.jpg" },
        { id: 3, name: "Product 4", price:"20$", img: "assets/imgs/55.jpg" },
        { id: 4, name: "Product 5", price:"20$", img: "assets/imgs/66.jpg" },
        { id: 5, name: "Product 6", price:"40$", img: "assets/imgs/44.jpg" },
        { id: 6, name: "Product 7", price:"20$", img: "assets/imgs/11.jpg" },
        { id: 7, name: "Product 8", price:"50$", img: "assets/imgs/33.jpg" },
      ]);

  return (
    <div className="container">
      <h2 className="text-center py-5">Products</h2>
      <div className="row">
        {products.map((ele) => (
          <Product key={ele.id} product={ele} />
        ))}
      </div>
    </div>

  )
}
