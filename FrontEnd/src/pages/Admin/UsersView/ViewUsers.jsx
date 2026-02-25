import AdminUsersTable from "../../../components/ui/Admin/Users/Viewusers.jsx";
import Header from "../../../components/layout/AdminLayout/header.jsx";
import Footer from "../../../components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";


function ViewUsers() {

    return (<>
        <Header />
        <AdminSidebar />
        <AdminUsersTable />
        <Footer />
    </>)
}

export default ViewUsers;

