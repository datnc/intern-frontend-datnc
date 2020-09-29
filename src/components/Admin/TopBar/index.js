import React from 'react';

const TopBar = props => {
    return (
        <div>
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="fa fa-server"></i>
                            <span class=""></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a class="dropdown-item" href="#">Logout</a>
                            <div class="dropdown-divider"></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

TopBar.propTypes = {

};

export default TopBar;