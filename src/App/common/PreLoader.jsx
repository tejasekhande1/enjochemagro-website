function Navbar() {
    return (
        <>
            <div style={{display: "none"}} className="custom-cursor__cursor"/>
            <div style={{display: "none"}} className="custom-cursor__cursor-two"/>
            <div className="preloader">
                <div
                    className="preloader__image"
                    style={{backgroundImage: "url(../src/assets/images/loader.png)"}}
                />
            </div>
        </>
    );
}

export default Navbar;