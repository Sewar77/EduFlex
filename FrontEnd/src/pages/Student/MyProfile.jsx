import UserProfile from "../../components/ui/User/UserProfile";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer"
import Sidebar from "../../components/ui/SideBar/SideBar";


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