import "./hero.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="img_div">
        <img src="/bag1.svg" alt="" />
      </div>
      <div className="hero_text_div">
        <div>
          <h1>
            Introducing our eco-friendly paper bags! Elevate your shopping
            experience while reducing your carbon footprint
          </h1>
        </div>
        <div>
          <h2>Shop now and join us in sustainable living</h2>
        </div>
        <div>
          <button className="learnmore_button">
            <h5>Learn more</h5>
            <img src="/rightarrow.svg" alt="" />
          </button>
          <button>
            <h5>Buy now</h5>
            <img src="/rightarrow.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
