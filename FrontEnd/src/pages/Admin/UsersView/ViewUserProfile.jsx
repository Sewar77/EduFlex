import Header from "../../../components/layout/AdminLayout/header.jsx";
import Footer from "../../../components/layout/AdminLayout/footer.jsx";
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";
import ViewUserProfile from "../../../components/ui/Admin/Users/UserProfile.jsx";


function ViewUserProfilePage() {

    return (<>
        <Header />
        <AdminSidebar />
        <ViewUserProfile />
        <Footer />
    </>)
}

export default ViewUserProfilePage;

