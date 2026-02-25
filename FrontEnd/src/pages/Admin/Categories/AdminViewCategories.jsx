import Footer from "../../../Components/layout/AdminLayout/footer.jsx";
import AdminHeader from "../../../Components/layout/AdminLayout/header.jsx";
import ViewCategories from "../../../Components/ui/Categories/ViewCategories.jsx";
import AdminSidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";

function AdminViewCategories() {
    return (
        <>
            <AdminHeader />
            <AdminSidebar />
            <ViewCategories />
            <Footer />
        </>
    )

}

export default AdminViewCategories;
