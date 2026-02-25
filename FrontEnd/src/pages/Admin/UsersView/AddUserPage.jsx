import AddUser from "../../../components/ui/Admin/Users/AddUsers.jsx";
import Header from "../../../components/layout/AdminLayout/header.jsx";
import Footer from "../../../components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";


function AddUsersPage() {

    return (<>
        <Header />
        <AdminSidebar />
        <AddUser />
        <Footer />
    </>)
}

export default AddUsersPage;

