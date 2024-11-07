import Shipping from "../../assets/benefit-item/shipping.svg"
import Shop from "../../assets/benefit-item/shop.svg"
import User from "../../assets/benefit-item/user.svg"

const Benefit = () => {
  return (
    <section className="mt-5">
      <div className="wrapper mt-3 p-2 flex items-center gap-2">
        <div className="image">
          <img src={Shipping} alt="" />
        </div>
        <div className="title">
          <h1 className="font-bold text-xl">Fast Shipping</h1>
          <span className="font-base text-base  text-[#9192A5]">
            Only less than 48 hours
          </span>
        </div>
      </div>

      <div className="wrapper mt-3 p-2 flex items-center gap-2">
        <div className="image">
          <img src={Shop} alt="" />
        </div>
        <div className="title">
          <h1 className="font-bold text-xl">Secured</h1>
          <span className="font-base text-base  text-[#9192A5]">
            High End Technology
          </span>
        </div>
      </div>

      <div className="wrapper mt-3 p-2 flex items-center gap-2">
        <div className="image">
          <img src={User} alt="" />
        </div>
        <div className="title">
          <h1 className="font-bold text-xl">183,499 Stores</h1>
          <span className="font-base text-base  text-[#9192A5]">
            All high quality products
          </span>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
