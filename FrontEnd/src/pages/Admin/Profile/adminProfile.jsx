import UserProfile from "../../../Components/ui/User/UserProfile.jsx";
import Footer from "../../../Components/layout/AdminLayout/footer.jsx";
import Header from "../../../Components/layout/AdminLayout/header.jsx";
import Sidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";


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