import "./productdesc.scss";
import Image from "next/image";

export default function Productdesc({ productName }) {
  return (
    <div className="Productdesc_div">
      <div className="product_img_div">
        <img src="/bag1.svg" alt="" />
      </div>
      <div className="Product_desc_div">
        <div className="productdecs_title_div">
          <h4>{productName}</h4>
        </div>
        <div className="productdecs_button_div">
          <button>Add to cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
}
