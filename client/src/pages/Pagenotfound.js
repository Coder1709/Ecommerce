import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};
Layout.defaultPorps = {
    title: "Ecommerce App - By Arpit Payhak",
    description : "An App created to learn react related things",
    keywords : "ecommerce , what is ecommerce  " ,
    author : "Arpit Pathak",

}

export default Pagenotfound;
