const BottomSection = () => {
  return (
    <div>
      <section className="bg-gray-200 w-full grid grid-cols-1 lg:grid-cols-3">
        <article>
          <img src="images/image-about-dark.jpg" className="w-full" alt="" />
        </article>
        <article className="p-8 lg:p-12">
          <h2 className="font-semibold text-2xl lg:text-3xl uppercase">
            ABOUT OUR FURNITURE
          </h2>
          <p
            className="text-slate-900 opacity-75 my-6"
            style={{ letterSpacing: "0.05rem" }}
          >
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <article>
          <img src="images/image-about-light.jpg" className="w-full" alt="" />
        </article>
      </section>
    </div>
  );
};

export default BottomSection;
