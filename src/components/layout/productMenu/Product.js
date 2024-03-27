import "./product.scss";
import Image from "next/image";
// import Productdesc from "@/components/productCard/Productdesc";
import Productdesc from "../../productCard/Productdesc";

export default function Product() {
  return (
    <section className="product_section">
      <div className="product_main_div">
        <div className="product_title_div">
          <h3>product</h3>
          <h4>In Vertpak </h4>
        </div>
        <div className="main_products">
          <Productdesc productName={"PapeBag"} />
          <Productdesc productName={"Tissue Paper"} />
          <Productdesc productName={"Toilet Roll"} />
          <Productdesc productName={"Billing Roll"} />
          <Productdesc productName={"paperbag"} />
        </div>
      </div>
    </section>
  );
}
