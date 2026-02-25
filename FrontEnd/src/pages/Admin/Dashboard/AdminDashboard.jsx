import AdminHeader from "../../../components/layout/AdminLayout/header.jsx";
import Footer from "../../../components/layout/AdminLayout/footer.jsx"
import AdminSidebar from "../../../components/ui/SideBar/AdminSideBar.jsx";
import SimpleTodo from "../../../components/ui/SimpleTodo/SimpleTodo.jsx";
import QuoteOfTheDay from "../../../components/ui/QuoteOfTheDay/QuoteOfTheDay.jsx";
import AdminUsageReport from "../../../components/ui/Admin/Reports/AdminUsageReport.jsx";

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





