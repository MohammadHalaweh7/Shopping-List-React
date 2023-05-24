import React from 'react'

export default function Product({product}) {
  return (
    <div className="col-md-3 d-flex flex-column align-items-center my-4">
    <div className="card">
      <img
        className="card-img-top"
        src={product.img}
        alt={product.name}
        style={{ height: "400px", objectFit: "cover" , width:"300px"}}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>{product.price}</p>
      </div>

      <button class="btn btn-primary">Add Card</button>
    </div>
  </div>
  )
}
