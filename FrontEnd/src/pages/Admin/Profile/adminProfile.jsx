import UserProfile from "../../../components/ui/User/UserProfile.jsx";
import Footer from "../../../components/layout/AdminLayout/footer.jsx";
import Header from "../../../components/layout/AdminLayout/header.jsx";
import Sidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";


function AdminProfile() {

    return (
        <>
            <Header />
            <Sidebar />
            <UserProfile />
            <Footer />
        </>
    )

}


export default AdminProfile;