import UserProfile from "../../../components/ui/User/UserProfile.jsx";
import Footer from "../../../components/layout/StudentLayout/footer.jsx";
import Header from "../../../components/layout/StudentLayout/header.jsx";
import Sidebar from "../../../components/ui/SideBar/InstructorSideBar.jsx";


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