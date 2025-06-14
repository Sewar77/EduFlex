import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import EnrolledCourses from "../../components/ui/enrollments/EnrolledCourse";
import Sidebar from "../../components/ui/SideBar/SideBar";
export default function MyCourses() {

    return (<>
        <Header />
        <Sidebar />
        <EnrolledCourses />
        <Footer />
    </>)
}