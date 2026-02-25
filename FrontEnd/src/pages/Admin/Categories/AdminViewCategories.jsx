import Footer from "../../../components/layout/AdminLayout/footer.jsx";
import AdminHeader from "../../../components/layout/AdminLayout/header.jsx";
import ViewCategories from "../../../components/ui/Categories/ViewCategories.jsx";
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";

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
