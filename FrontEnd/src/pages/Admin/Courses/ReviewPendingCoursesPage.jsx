import Header from "../../../Components/layout/AdminLayout/header.jsx";
import Footer from "../../../Components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";
import ReviewPendingCourses from "../../../Components/ui/Admin/Courses/ReviewPendingCourses.jsx";


function ReviewPendingCoursesPages() {

    return (<>
        <Header />
        <AdminSidebar />
        <ReviewPendingCourses />
        <Footer />
    </>)
}

export default ReviewPendingCoursesPages;

