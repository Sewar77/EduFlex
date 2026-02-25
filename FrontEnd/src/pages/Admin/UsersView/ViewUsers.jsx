import AdminUsersTable from "../../../Components/ui/Admin/Users/Viewusers.jsx";
import Header from "../../../Components/layout/AdminLayout/header.jsx";
import Footer from "../../../Components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";


function ViewUsers() {

    return (<>
        <Header />
        <AdminSidebar />
        <AdminUsersTable />
        <Footer />
    </>)
}

export default ViewUsers;

