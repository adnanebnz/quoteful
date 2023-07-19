import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="blue_gradient text-center"> Meaningful Quotes</span>
    </h1>
    <p className="desc text-center">
      Quoteful is an open-source Quote tool for modern world to discover and
      share meaningful quotes.
    </p>

    <Feed />
  </section>
);

export default Home;
