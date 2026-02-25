import AdminHeader from "../../../Components/layout/AdminLayout/header.jsx";
import Footer from "../../../Components/layout/AdminLayout/footer.jsx"
import AdminSidebar from "../../../Components/ui/SideBar/AdminSideBar.jsx";
import SimpleTodo from "../../../Components/ui/SimpleTodo/SimpleTodo.jsx";
import QuoteOfTheDay from "../../../Components/ui/QuoteOfTheDay/QuoteOfTheDay.jsx";
import AdminUsageReport from "../../../Components/ui/Admin/Reports/AdminUsageReport.jsx";

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





