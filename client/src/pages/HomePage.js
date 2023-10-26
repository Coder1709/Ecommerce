import React from "react";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <h1>HomePage</h1>
    </Layout>
  );
};

Layout.defaultPorps = {
    title: "Ecommerce App - By Arpit Payhak",
    description : "An App created to learn react related things",
    keywords : "ecommerce , what is ecommerce  " ,
    author : "Arpit Pathak",

}

export default HomePage;