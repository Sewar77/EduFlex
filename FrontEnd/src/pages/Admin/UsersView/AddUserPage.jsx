import AddUser from "../../../Components/ui/Admin/Users/AddUsers.jsx";
import Header from "../../../Components/layout/AdminLayout/header.jsx";
import Footer from "../../../Components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";


function AddUsersPage() {

    return (<>
        <Header />
        <AdminSidebar />
        <AddUser />
        <Footer />
    </>)
}

export default AddUsersPage;

