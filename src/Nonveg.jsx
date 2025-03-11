import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store.js";
import "bootstrap/dist/css/bootstrap.min.css";

function NonVeg() {
  // Take the products from store using useSelector()
  let NonvegItems = useSelector((state) => state.products.nonveg);

  // Create object for useDispatch() for taking the actions from reducers
  let dispatch = useDispatch();

  let allItems = NonvegItems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-lg border-0 h-100">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title text-danger">{item.name}</h5>
          <p className="card-text text-success fw-bold">&#8377;{item.price}</p>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="btn btn-primary btn-sm w-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-white bg-danger py-2 rounded">Non-Veg Items</h1>
      <div className="row">{allItems}</div>
    </div>
  );
}

export default NonVeg;
