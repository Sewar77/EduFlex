import Header from "../../../components/layout/AdminLayout/header.jsx";
import Footer from "../../../components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";
import AdminCoursesTable from "../../../components/ui/Admin/Courses/AdminCoursesTable.jsx";


function AdminCoursesTablePages() {

    return (<>
        <Header />
        <AdminSidebar />
        <AdminCoursesTable />
        <Footer />
    </>)
}

export default AdminCoursesTablePages;

