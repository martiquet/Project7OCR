import React from "react";
import Banner from "../components/Banner";
import Productcard from "../components/Card";

// Get product data from json
import Dataproduct from "../data.json";

// Create page Home
const Home = () => {
  return (
    <>
      <Banner />
      <section className="home__product">
        {/* get each product in json */}
        {Dataproduct.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default Home;
