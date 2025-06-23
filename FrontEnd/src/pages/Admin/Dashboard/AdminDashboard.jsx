import AdminHeader from "../../../components/layout/AdminLayout/header";
import Footer from "../../../components/layout/AdminLayout/footer"
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar";
import SimpleTodo from "../../../components/ui/SimpleTodo/SimpleTodo";
import QuoteOfTheDay from "../../../components/ui/QuoteOfTheDay/QuoteOfTheDay";
import AdminUsageReport from "../../../components/ui/Admin/Reports/AdminUsageReport";

function AdminDashboard() {
    return (

        <>
            <AdminHeader />
            <AdminSidebar />
            <QuoteOfTheDay />
            <AdminUsageReport />
            <SimpleTodo />
            <Footer />

        </>
    )


}
export default AdminDashboard;





