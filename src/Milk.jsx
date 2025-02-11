import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  let milk = useSelector((state) => state.products.milk);
  let dispatch = useDispatch();

  let finalItems = milk.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <img
        src={item.image}
        width={150}
        height={150}
        alt={item.name}/>
      </div>
      <span>
        {item.name} - <strong>&#8377;{item.price}</strong>
      </span>
      <button
        onClick={() => dispatch(addToCart(item))}
        className="btn btn-success btn-sm"
      >
        Add to Cart
      </button>
    </li>
  ));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Milk Products</h1>
      <ol className="list-group">
        {finalItems}
      </ol>
    </div>
  );
}

export default Milk;
