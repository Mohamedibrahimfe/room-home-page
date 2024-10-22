import React, { useState } from "react";

const data = [
  {
    id: 1,
    img: "images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    mobile: "images/mobile-image-hero-1.jpg",
    desktop: "images/desktop-image-hero-1.jpg",
    text: "We provide unmatched quality, comfort, and style for property owners across the country Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    img: "images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    mobile: "images/mobile-image-hero-2.jpg",
    desktop: "images/desktop-image-hero-2.jpg",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    img: "images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    mobile: "images/mobile-image-hero-3.jpg",
    desktop: "images/desktop-image-hero-3.jpg",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. ",
  },
];
export default function Hero() {
  const [items] = useState(data);
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };
  return (
    <section>
      {items.map((item, index) => (
        <article
          className={
            slideIndex === index + 1
              ? "grid grid-cols-1 lg:grid-cols-2 "
              : "hidden"
          }
          key={item.id}
        >
          <div className="relative ">
            <picture>
              <source media="(max-width: 768px)" srcSet={item.mobile} />
              <img className="w-full" src={item.img} alt={item.title} />
            </picture>
            <ul className="absolute bottom-0 -right-1 lg:-right-32 mr-1 flex sm:right-0">
              <li>
                <button
                  onClick={prevSlide}
                  className="bg-black p-6 hover:bg-neutral-700 transition-all duration-200"
                >
                  <img src="images/icon-angle-left.svg" alt="" />
                </button>
              </li>
              <li>
                <button
                  onClick={nextSlide}
                  className="bg-black p-6 hover:bg-neutral-700 transition-all duration-200"
                >
                  <img src="images/icon-angle-right.svg" alt="" />
                </button>
              </li>
            </ul>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-slate-900 text-3xl lg:text-5xl">
              {item.title}
            </h1>
            <p className="text-slate-900 opacity-75 mt-8 mb-12">{item.text}</p>
            <button
              className="flex items-center gap-4 uppercase hover:opacity-75"
              style={{ letterSpacing: "0.5rem" }}
            >
              Shop Now <img src="images/icon-arrow.svg" alt="" />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
