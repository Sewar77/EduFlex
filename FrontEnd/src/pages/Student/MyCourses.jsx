import Footer from "../../components/layout/StudentLayout/footer.jsx";
import Header from "../../components/layout/StudentLayout/header.jsx";
import EnrolledCourses from "../../components/ui/enrollments/EnrolledCourse.jsx";
import Sidebar from "../../components/ui/SideBar/SideBar.jsx";
export default function MyCourses() {

    return (<>
        <Header />
        <Sidebar />
        <EnrolledCourses />
        <Footer />
    </>)
}