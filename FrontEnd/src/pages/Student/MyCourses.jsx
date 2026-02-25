import Footer from "../../Components/layout/StudentLayout/Footer.jsx";
import Header from "../../Components/layout/StudentLayout/Header.jsx";
import EnrolledCourses from "../../Components/ui/enrollments/EnrolledCourse.jsx";
import Sidebar from "../../Components/ui/SideBar/SideBar.jsx";
export default function MyCourses() {

    return (<>
        <Header />
        <Sidebar />
        <EnrolledCourses />
        <Footer />
    </>)
}