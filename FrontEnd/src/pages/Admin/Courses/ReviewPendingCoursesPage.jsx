import Header from "../../../components/layout/AdminLayout/header.jsx";
import Footer from "../../../components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";
import ReviewPendingCourses from "../../../components/ui/Admin/Courses/ReviewPendingCourses.jsx";


function ReviewPendingCoursesPages() {

    return (<>
        <Header />
        <AdminSidebar />
        <ReviewPendingCourses />
        <Footer />
    </>)
}

export default ReviewPendingCoursesPages;

