import { Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";

function Navbar() {
    const [isSideBarActive, setIsSideBarActive] = useState(false);
    const sidebarRef = useRef(null);
    const resetStatesExcept = (currentState, currentStateSetter) => {
        setIsSideBarActive(false);

        currentStateSetter(!currentState);
    };

    // handle sidebar toggle
    const handleSideBarToggle = (event) => {
        event.preventDefault();
        resetStatesExcept(isSideBarActive, setIsSideBarActive);
    };

    // close all dropdowns and popups when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!sidebarRef.current?.contains(event.target)) {
                setIsSideBarActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <nav
                className={`pc-sidebar ${
                    isSideBarActive ? "mob-sidebar-active" : ""
                }`}
                ref={sidebarRef}
            >
                <div
                    className="navbar-wrapper"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="m-header"
                        style={{
                            backgroundColor: "#174267",
                            position: "relative",
                        }}
                    >
                        <a
                            href="../dashboard/index.html"
                            className="b-brand text-primary"
                        >
                            {/* ========   Change your logo from here   ============ */}
                            <img
                                src="/assets/images/ftlogo.png"
                                className="img-fluid"
                                alt="logo"
                            />
                        </a>
                        {isSideBarActive && (
                            <div
                                className="flex justify-end items-center"
                                style={{
                                    position: "absolute",
                                    top: "10",
                                    right: "0",
                                    height: "100%",
                                    padding: "10px",
                                    marginTop: "30px",
                                    zIndex: 1000,
                                }}
                            >
                                <a href="#" onClick={handleSideBarToggle}>
                                    <i className="ti ti-x text-2xl leading-none" />
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">
                            {/* <li class="pc-item pc-caption">
    <label data-i18n="Navigation">Navigation</label>
  </li> */}
                            <li className="pc-item">
                                <Link href="/" className="pc-link">
                                    <span className="pc-micon">
                                        <i className="ti ti-3d-cube-sphere" />
                                    </span>
                                    <span
                                        className="pc-mtext"
                                        data-i18n="Dashboard"
                                    >
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li className="pc-item">
                                <Link href="/post" className="pc-link">
                                    <span className="pc-micon">
                                        <i className="ti ti-3d-cube-sphere" />
                                    </span>
                                    <span
                                        className="pc-mtext"
                                        data-i18n="Dashboard"
                                    >
                                        Post
                                    </span>
                                </Link>
                            </li>
                            <li className="pc-item">
                                <a
                                    href="#!"
                                    className="pc-link"
                                    target="_blank"
                                >
                                    <span className="pc-micon">
                                        <i className="ti ti-lock" />
                                    </span>
                                    <span
                                        className="pc-mtext"
                                        data-i18n="Lock Doubts"
                                    >
                                        Lock Doubts
                                    </span>
                                </a>
                            </li>
                            <li className="pc-item">
                                <a
                                    href="#!"
                                    className="pc-link"
                                    target="_blank"
                                >
                                    <span className="pc-micon">
                                        <i className="ti ti-search" />
                                    </span>
                                    <span
                                        className="pc-mtext"
                                        data-i18n="Browse Doubts"
                                    >
                                        Browse Doubts
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="pc-header">
                <div
                    className="header-wrapper"
                    style={{ backgroundColor: "#174267" }}
                >
                    {" "}
                    {/* [Mobile Media Block] start */}
                    <div className="me-auto pc-mob-drp">
                        <ul className="list-unstyled">
                            {/* ======= Menu collapse Icon ===== */}
                            <li className="pc-h-item pc-sidebar-collapse">
                                <a
                                    href="#"
                                    className="pc-head-link ms-0"
                                    id="sidebar-hide"
                                >
                                    <i
                                        className="ti ti-menu-2"
                                        style={{ color: "#FF8016" }}
                                    />
                                </a>
                            </li>
                            <li className="pc-h-item pc-sidebar-popup">
                                <a
                                    href="#"
                                    className="pc-head-link ms-0"
                                    id="mobile-collapse"
                                    onClick={handleSideBarToggle}
                                >
                                    <i
                                        className="ti ti-menu-2"
                                        style={{ color: "#FF8016" }}
                                    />
                                </a>
                            </li>
                            <li className="pc-h-item d-none d-md-inline-flex">
                                <form className="form-search">
                                    <i className="search-icon">
                                        <svg className="pc-icon">
                                            <use xlinkHref="#custom-search-normal-1" />
                                        </svg>
                                    </i>
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Ctrl + K"
                                    />
                                </form>
                            </li>
                        </ul>
                    </div>
                    {/* [Mobile Media Block end] */}
                    <div className="ms-auto">
                        <ul className="list-unstyled">
                            <li className="dropdown pc-h-item">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none me-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <svg
                                        className="pc-icon"
                                        style={{ color: "#FF8016" }}
                                    >
                                        <use xlinkHref="#custom-notification" />
                                    </svg>
                                    <span className="badge bg-danger pc-h-badge">
                                        3
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                                        <h5 className="m-0">Notifications</h5>
                                        <a
                                            href="#!"
                                            className="btn btn-link btn-sm"
                                        >
                                            Mark all read
                                        </a>
                                    </div>
                                    <div
                                        className="dropdown-body text-wrap header-notification-scroll position-relative"
                                        style={{
                                            maxHeight: "calc(100vh - 215px)",
                                        }}
                                    >
                                        <p className="text-span">Today</p>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <svg className="pc-icon text-primary">
                                                            <use xlinkHref="#custom-sms" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <span className="float-end text-sm text-muted">
                                                            2 minutes ago
                                                        </span>
                                                        <h5 className="text-body mb-2">
                                                            New Doubt Posted
                                                        </h5>
                                                        <p className="mb-0">
                                                            Lorem Ipsum has been
                                                            the industry's
                                                            standard dummy text
                                                            ever since the 1500.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <svg className="pc-icon text-primary">
                                                            <use xlinkHref="#custom-sms" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <span className="float-end text-sm text-muted">
                                                            45 minutes ago
                                                        </span>
                                                        <h5 className="text-body mb-2">
                                                            New Doubt Posted
                                                        </h5>
                                                        <p className="mb-0">
                                                            Lorem Ipsum has been
                                                            the industry's
                                                            standard dummy text
                                                            ever since the 1500.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center py-2">
                                        <a href="#!" className="link-danger">
                                            Clear all Notifications
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="pc-h-item">
                                <a
                                    href="#"
                                    className="pc-head-link me-0"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#announcement"
                                    aria-controls="announcement"
                                >
                                    <svg
                                        className="pc-icon"
                                        style={{ color: "#FF8016" }}
                                    >
                                        <use xlinkHref="#custom-flash" />
                                    </svg>
                                </a>
                            </li>
                            <li className="dropdown pc-h-item header-user-profile">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none me-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="/assets/images/user/avatar-2.jpg"
                                        alt="user-image"
                                        className="user-avtar"
                                    />
                                </a>
                                <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                                        <h5 className="m-0">Profile</h5>
                                    </div>
                                    <div className="dropdown-body">
                                        <div
                                            className="profile-notification-scroll position-relative"
                                            style={{
                                                maxHeight:
                                                    "calc(100vh - 225px)",
                                            }}
                                        >
                                            <div className="d-flex mb-1">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="/assets/images/user/avatar-2.jpg"
                                                        alt="user-image"
                                                        className="user-avtar wid-35"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">
                                                        Ahmmed Imtiaz 🖖
                                                    </h6>
                                                    <span>
                                                        hello@ahmmedimtiaz.com
                                                    </span>
                                                </div>
                                            </div>
                                            <hr className="border-secondary border-opacity-50" />
                                            <p className="text-span">Manage</p>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                <span>
                                                    <i className="ti ti-user" />
                                                    {/* <svg class="pc-icon text-muted me-2">
            <use xlink:href="#custom-setting-outline"></use>
          </svg> */}
                                                    <span>My Account</span>
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                <span>
                                                    <svg className="pc-icon text-muted me-2">
                                                        <use xlinkHref="#custom-setting-outline" />
                                                    </svg>
                                                    <span>Settings</span>
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="dropdown-item"
                                            >
                                                <span>
                                                    <svg className="pc-icon text-muted me-2">
                                                        <use xlinkHref="#custom-lock-outline" />
                                                    </svg>
                                                    <span>Change Password</span>
                                                </span>
                                            </a>
                                            <hr className="border-secondary border-opacity-50" />
                                            <div className="d-grid mb-2">
                                                <Link href="/logout">
                                                    <button
                                                        className="btn btn-light text-white font-weight-bold"
                                                        style={{
                                                            backgroundColor:
                                                                "#FF8016",
                                                        }}
                                                    >
                                                        <svg className="pc-icon me-2">
                                                            <use xlinkHref="#custom-logout-1-outline" />
                                                        </svg>
                                                        Logout
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <div
                className="offcanvas pc-announcement-offcanvas offcanvas-end"
                tabIndex={-1}
                id="announcement"
                aria-labelledby="announcementLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="announcementLabel">
                        Update Log
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <p className="text-span">Today</p>
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="align-items-center d-flex flex-wrap gap-2 mb-3">
                                <div className="badge bg-light-success f-12">
                                    Big News
                                </div>
                                <p className="mb-0 text-muted">2 min ago</p>
                                <span className="badge dot bg-warning" />
                            </div>
                            <h5 className="mb-3">Doubt Solve is Redesigned</h5>
                            <p className="text-muted">
                                Doubt Solve is completely renowed with high
                                aesthetics User Interface.
                            </p>
                            <img
                                src="https://dummyimage.com/600x400/000/fff"
                                alt="img"
                                className="img-fluid mb-3"
                            />
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-grid">
                                        <a
                                            className="btn btn-outline-secondary"
                                            href="#"
                                            target="_blank"
                                        >
                                            Check Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
