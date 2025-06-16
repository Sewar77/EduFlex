import Header from "../../components/layout/Header";
import Footer from "../../components/layout/footer";
import Recommended from "../../components/ui/Courses/RecommendedCourses";
import Sidebar from "../../components/ui/SideBar/SideBar";

function RecommendedCourses() {
    return (
        <>
            <Header />
            <Sidebar/>
            <Recommended />
            <Footer />

        </>


    )
}


export default RecommendedCourses