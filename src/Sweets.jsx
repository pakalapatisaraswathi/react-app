import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Sweets() {
  // Fetching sweets items from Redux store
  let sweets = useSelector((state) => state.products?.sweets ?? []);
  const dispatch = useDispatch();

  const allItems = sweets.map((item) => (
    <div key={item.id || item.name} className="col-md-4 mb-4">
      <div className="card shadow-lg border-0 h-100 bg-light">
        <img
          src={item.image}
          className="card-img-top rounded-top"
          alt={item.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title text-danger fw-bold">{item.name}</h5>
          <p className="card-text text-success fw-bold">&#8377;{item.price}</p>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="btn btn-warning btn-sm w-100 text-white fw-bold shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-white bg-danger py-3 rounded shadow-lg">
        Sweets Items
      </h1>
      <div className="row">
        {sweets.length > 0 ? allItems : <p className="text-center text-danger">No sweets available</p>}
      </div>
    </div>
  );
}

export default Sweets;
