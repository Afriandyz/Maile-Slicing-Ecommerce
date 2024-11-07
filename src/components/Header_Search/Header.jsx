import { header } from "../../data/HeaderData";
import Search from "./Search"

const Header = () => {
  return (
    <section>
      <div className="wrapper text-center">
        {header.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="font-extrabold text-4xl">{item.headline}</h1>
              <h1 className="font-extrabold text-4xl">{item.headline2}</h1>
              <div className="flex justify-center mt-2">
                <p className="w-[75%] text-[#9192A5] font-medium text-lg">
                  {item.subheadline}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Search />
    </section>
  );
};

export default Header;
