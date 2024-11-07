import { testimonials } from "../../data/TesimonialsData";

const Testimonials = () => {
  return (
    <section
      className="mt-5 p-2
    "
    >
      <div className="title flex justify-between items-center mb-2">
        <h1 className="font-extrabold text-2xl">Testimonials</h1>
        <button className="bg-black text-white p-4 rounded-full">
          Read All
        </button>
      </div>

      {testimonials.map((item, index) => {
        return (
          <div
            key={index}
            className="testimonial_cards mt-5 p-2 bg-[#FBFBFB] rounded-lg shadow-sm"
          >
            <div className="heading flex items-center gap-3">
              <div className="image">
                <img src={item.userAvatar} alt="" width={"50px"} />
              </div>
              <div className="name">
                <h1 className="font-semibold text-lg">{item.name}</h1>
                <span className="font-medium text-sm text-[#9192A5]">
                  {item.jobs}
                </span>
              </div>
            </div>
            <div className="testimonials mt-3">
              <p className="font-semibold text-base">{item.testimonial}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Testimonials;
