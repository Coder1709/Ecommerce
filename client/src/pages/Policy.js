import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
          
        </div>
        <div className="col-md-4">
          <h1>
          Privacy Policy
          </h1>
          <p>
          We are committed to the protection of personal data we process – below you’ll find the Privacy Policy, which guides how we collect, use, transfer and store the information that you provide us with or that we collect about you when interacting with Fashion for Good. The following information is provided by Fashion for Good to show how we comply with applicable rules and regulations such as GDPR and to help keep you fully informed about your rights (and how to enforce them). By visiting , you accept and consent to the practices described in this Privacy Policy.
          </p>
        </div>
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

export default Policy;
