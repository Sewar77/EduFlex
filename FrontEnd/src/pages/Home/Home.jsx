import React from "react";
// import style from "./Home.module.css"
import Footer from "./HomeLayout/HomeFooter";
import LandingPage from "./HomeLayout/LandingPage";
import Header from "./HomeLayout/HomeHeader";
import Categories from "../Categories/Categories";
function Home() {

    return (
        <>
            <Header />
            <LandingPage />
            <Categories/>
            <Footer />
        </>

    )

}

export default Home;









