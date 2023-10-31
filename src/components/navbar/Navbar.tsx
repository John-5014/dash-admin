import "./Navbar";
import "./navbar.scss"

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="/public/logo.svg" alt="" />
                <span>Kaiser-admin</span>
            </div>
            <div className="icons">
                <img src="/public/search.svg" alt="" className="icon" />
                <img src="/public/app.svg" alt="" className="icon" />
                <img src="/public/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/public/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/public/pexels-sheikh-basim-18419151 (1).jpg" alt="" />
                    <span>John</span>
                </div>
                <img src="/public/setting.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar;
