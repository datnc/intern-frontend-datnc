import React from 'react';
import Footer from '../../components/Admin/Footer';
import Sidebar from '../../components/Admin/Sidebar';
import TopBar from '../../components/Admin/TopBar';
import '../../assets/css/admin/sb-admin-2.min.css';
import '../../assets/css/admin/main.scss';

export default ({ children }) => {
    return (
        <div className="admin-page">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar />
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}