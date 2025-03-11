import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  let milk = useSelector((state) => state.products.milk);
  let dispatch = useDispatch();

  let finalItems = milk.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-lg border-0 h-100">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title text-primary">{item.name}</h5>
          <p className="card-text text-success fw-bold">&#8377;{item.price}</p>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="btn btn-success btn-sm w-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-white bg-primary py-2 rounded">Milk Products</h1>
      <div className="row">{finalItems}</div>
    </div>
  );
}

export default Milk;
