import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet"

const Layout = ({ children, title, description, author, keyword }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>


                <meta name="description" content={description} />
                <meta name="keywords" content={keyword} />
                <meta name="author" content={author}/>
               

            </Helmet>
            <Header />
            <main style={{ minHeight: "77vh" }}>{children}</main>

            <Footer />
        </div>
    )
}

export default Layout
