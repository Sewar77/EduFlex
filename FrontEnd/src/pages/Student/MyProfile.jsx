import UserProfile from "../../Components/ui/User/UserProfile.jsx";
import Footer from "../../Components/layout/StudentLayout/Footer.jsx";
import Header from "../../Components/layout/StudentLayout/Header.jsx";
import Sidebar from "../../Components/ui/SideBar/SideBar.jsx";


function MyProfile() {

    return (
        <>
            <Header />
            <Sidebar />
            <UserProfile />
            <Footer />
        </>
    )

}


export default MyProfile;