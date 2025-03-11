import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function VegItems() {
  // Retrieve the products from the Redux store using useSelector
  const vegItems = useSelector((state) => state.products?.veg ?? []);

  // Create the dispatch function
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-white bg-success py-2 rounded">Veg Items</h1>
      <div className="row">
        {vegItems.length > 0 ? (
          vegItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-success">{item.name}</h5>
                  <p className="card-text text-danger fw-bold">
                    &#8377;{item.price}
                  </p>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="btn btn-warning btn-sm w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No Veg Items Available</p>
        )}
      </div>
    </div>
  );
}

export default VegItems;
