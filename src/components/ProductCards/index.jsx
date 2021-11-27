import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";
import { removeFromCart } from "../../store/modules/cart/actions";

import "./style.css";

const ProductCards = ({ product, removeItem = false, index }) => {
  const { id, name, image, price } = product;

  const dispatch = useDispatch();

  return (
    <div key={id} className="cardBox">
      <img src={image} alt={`img${id}`} />
      <div>
        <p className="title">{name}</p>
        <p className="price">R$ {price}</p>
        {/* <p className="qtd">qtd</p> tentar implementar quantidade*/}
      </div>
      {removeItem ? (
        <button onClick={() => dispatch(removeFromCart(index))}>X</button>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>
          add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCards;
