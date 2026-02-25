import Header from "../../../Components/layout/AdminLayout/header.jsx";
import Footer from "../../../Components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";
import AdminCoursesTable from "../../../Components/ui/Admin/Courses/AdminCoursesTable.jsx";


function AdminCoursesTablePages() {

    return (<>
        <Header />
        <AdminSidebar />
        <AdminCoursesTable />
        <Footer />
    </>)
}

export default AdminCoursesTablePages;

