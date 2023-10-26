import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout 
        title={"About us-Ecommerce Section"}
        author = {"Arpit Pathak"}
        >
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">

                        Address : 2nd FLOOR GOVERMENT HOUSING COLONY, 2, Swami Vivekananda Rd, opp. CHURCH, Siddharth Nagar, Goregaon West, Mumbai, Maharashtra 400104
                        Email:pathakarpit9454@gmail.com
                        Phone No : 6307851614


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


export default About;
