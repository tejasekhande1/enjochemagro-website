import Navbar from "./Navbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import TopBar from "./TopBar.jsx";
import NavBarMain from "./NavBarMain.jsx";
import PreLoader from "./PreLoader.jsx";
import Footer from "./Footer.jsx";


function PageWrapper(props) {

    return (
        <>
            <PreLoader/>
            <div className="page-wrapper">
                <TopBar />
                <NavBarMain />

                {props.children}

                <Footer />
            </div>
            <Navbar/>
            <ScrollToTop/>
        </>
    );
}

export default PageWrapper
