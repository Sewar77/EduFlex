import Header from "../../../Components/layout/AdminLayout/header.jsx";
import Footer from "../../../Components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";
import ViewUserProfile from "../../../Components/ui/Admin/Users/UserProfile.jsx";


function ViewUserProfilePage() {

    return (<>
        <Header />
        <AdminSidebar />
        <ViewUserProfile />
        <Footer />
    </>)
}

export default ViewUserProfilePage;

