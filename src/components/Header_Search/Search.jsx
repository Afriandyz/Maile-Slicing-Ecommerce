import searchImg from "../../assets/Search/search.png"

const Search = () => {
  return (
    <section className="mt-2">
      <div className="wrapper flex justify-center">
        <input
          type="text"
          placeholder="Search by product name"
          className="border-[#9192A5] p-3 w-[70%] rounded-full shadow-lg outline-none"
        />
        <div className="searchImg absolute">
          <img src={searchImg} alt="search_img" className="relative left-28 top-1"/>
        </div>
      </div>
    </section>
  );
}

export default Search