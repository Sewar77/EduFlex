import UserProfile from "../../../Components/ui/User/UserProfile.jsx";
import Footer from "../../../Components/layout/StudentLayout/footer.jsx";
import Header from "../../../Components/layout/StudentLayout/header.jsx";
import Sidebar from "../../../Components/ui/SideBar/InstructorSideBar.jsx";


function InstrcutorProfile() {

    return (
        <>
            <Header />
            <Sidebar />
            <UserProfile />
            <Footer />
        </>
    )

}


export default InstrcutorProfile;