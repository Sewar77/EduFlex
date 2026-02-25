import Footer from "../../Components/layout/StudentLayout/footer.jsx";
import Header from "../../Components/layout/StudentLayout/header.jsx";
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