import Link from 'next/link'

export default () => (
    <div>
        <div className="theme-red">
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="preloader">
                        <div className="spinner-layer pl-red">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <p>Harap tunggu...</p>
                </div>
            </div>

            <div className="overlay"></div>

            <div className="search-bar">
                <div className="search-icon">
                    <i className="material-icons">search</i>
                </div>
                <input type="text" placeholder="START TYPING..." />
                <div className="close-search">
                    <i className="material-icons">close</i>
                </div>
            </div>

            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="javascript:void(0);" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                        <a href="javascript:void(0);" className="bars"></a>
                        <a className="navbar-brand" href="index.html">PROJECT1 - HOME</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="javascript:void(0);" className="js-search" data-close="true"><i className="material-icons">search</i></a></li>
                            <li className="dropdown">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button">
                                    <i className="material-icons">notifications</i>
                                    <span className="label-count">7</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">NOTIFICATIONS</li>
                                    <li className="body">
                                        <ul className="menu">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-light-green">
                                                        <i className="material-icons">person_add</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4>12 new members joined</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 14 mins ago
                                                            </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-cyan">
                                                        <i className="material-icons">add_shopping_cart</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4>4 sales made</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 22 mins ago
                                                            </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-red">
                                                        <i className="material-icons">delete_forever</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>Nancy Doe</b> deleted account</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 3 hours ago
                                                            </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-orange">
                                                        <i className="material-icons">mode_edit</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>Nancy</b> changed name</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 2 hours ago
                                                            </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-blue-grey">
                                                        <i className="material-icons">comment</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>John</b> commented your post</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 4 hours ago
                                                            </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-light-green">
                                                        <i className="material-icons">cached</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4><b>John</b> updated status</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> 3 hours ago
                                                            </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <div className="icon-circle bg-purple">
                                                        <i className="material-icons">settings</i>
                                                    </div>
                                                    <div className="menu-info">
                                                        <h4>Settings updated</h4>
                                                        <p>
                                                            <i className="material-icons">access_time</i> Yesterday
                                                            </p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="javascript:void(0);">View All Notifications</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button">
                                    <i className="material-icons">flag</i>
                                    <span className="label-count">9</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">TASKS</li>
                                    <li className="body">
                                        <ul className="menu tasks">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Footer display issue
                                                    <small>32%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '32%' }}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Make new buttons
                                                    <small>45%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-cyan" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "45%" }}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Create new dashboard
                                                    <small>54%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-teal" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "54%" }}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Solve transition issue
                                                    <small>65%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <h4>
                                                        Answer GitHub questions
                                                    <small>92%</small>
                                                    </h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "92%" }}>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="javascript:void(0);">View All Tasks</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pull-right"><a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="material-icons">more_vert</i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section>
                <aside id="leftsidebar" className="sidebar">
                    <div className="user-info">
                        <div className="image">
                            <img src="/static/images/user.png" width="48" height="48" alt="User" />
                        </div>
                        <div className="info-container">
                            <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                            <div className="email">john.doe@example.com</div>
                            <div className="btn-group user-helper-dropdown">
                                <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                                <ul className="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);"><i className="material-icons">person</i>Profile</a></li>
                                    <li role="seperator" className="divider"></li>
                                    <li><a href="javascript:void(0);"><i className="material-icons">group</i>Followers</a></li>
                                    <li><a href="javascript:void(0);"><i className="material-icons">shopping_cart</i>Sales</a></li>
                                    <li><a href="javascript:void(0);"><i className="material-icons">favorite</i>Likes</a></li>
                                    <li role="seperator" className="divider"></li>
                                    <li><Link href="/signin"><a><i className="material-icons">input</i>Sign Out</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <ul className="list">
                            <li className="header">MENU</li>
                            <li className="active">
                                <a href="index.html">
                                    <i className="material-icons">home</i>
                                    <span>DASBOR</span>
                                </a>
                            </li>
                            <li>
                                <Link href="/categories">
                                <a>
                                    <i className="material-icons">text_fields</i>
                                    <span>JADWAL</span>
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/subcategories">
                                <a>
                                    <i className="material-icons">layers</i>
                                    <span>JELAJAH</span>
                                </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="legal">
                        <div className="copyright">
                            &copy; 2018 <a href="javascript:void(0);">AdminBSB - Material Design</a>.
                            </div>
                        <div className="version">
                            <b>Version: </b> 1.0.5
                            </div>
                    </div>
                </aside>
                <aside id="rightsidebar" className="right-sidebar">
                    <ul className="nav nav-tabs tab-nav-right" role="tablist">
                        <li role="presentation" className="active"><a href="#skins" data-toggle="tab">SKINS</a></li>
                        <li role="presentation"><a href="#settings" data-toggle="tab">SETTINGS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active in active" id="skins">
                            <ul className="demo-choose-skin">
                                <li data-theme="red" className="active">
                                    <div className="red"></div>
                                    <span>Red</span>
                                </li>
                                <li data-theme="pink">
                                    <div className="pink"></div>
                                    <span>Pink</span>
                                </li>
                                <li data-theme="purple">
                                    <div className="purple"></div>
                                    <span>Purple</span>
                                </li>
                                <li data-theme="deep-purple">
                                    <div className="deep-purple"></div>
                                    <span>Deep Purple</span>
                                </li>
                                <li data-theme="indigo">
                                    <div className="indigo"></div>
                                    <span>Indigo</span>
                                </li>
                                <li data-theme="blue">
                                    <div className="blue"></div>
                                    <span>Blue</span>
                                </li>
                                <li data-theme="light-blue">
                                    <div className="light-blue"></div>
                                    <span>Light Blue</span>
                                </li>
                                <li data-theme="cyan">
                                    <div className="cyan"></div>
                                    <span>Cyan</span>
                                </li>
                                <li data-theme="teal">
                                    <div className="teal"></div>
                                    <span>Teal</span>
                                </li>
                                <li data-theme="green">
                                    <div className="green"></div>
                                    <span>Green</span>
                                </li>
                                <li data-theme="light-green">
                                    <div className="light-green"></div>
                                    <span>Light Green</span>
                                </li>
                                <li data-theme="lime">
                                    <div className="lime"></div>
                                    <span>Lime</span>
                                </li>
                                <li data-theme="yellow">
                                    <div className="yellow"></div>
                                    <span>Yellow</span>
                                </li>
                                <li data-theme="amber">
                                    <div className="amber"></div>
                                    <span>Amber</span>
                                </li>
                                <li data-theme="orange">
                                    <div className="orange"></div>
                                    <span>Orange</span>
                                </li>
                                <li data-theme="deep-orange">
                                    <div className="deep-orange"></div>
                                    <span>Deep Orange</span>
                                </li>
                                <li data-theme="brown">
                                    <div className="brown"></div>
                                    <span>Brown</span>
                                </li>
                                <li data-theme="grey">
                                    <div className="grey"></div>
                                    <span>Grey</span>
                                </li>
                                <li data-theme="blue-grey">
                                    <div className="blue-grey"></div>
                                    <span>Blue Grey</span>
                                </li>
                                <li data-theme="black">
                                    <div className="black"></div>
                                    <span>Black</span>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="settings">
                            <div className="demo-settings">
                                <p>GENERAL SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Report Panel Usage</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Email Redirect</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                                <p>SYSTEM SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Notifications</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Auto Updates</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                                <p>ACCOUNT SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Offline</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Location Permission</span>
                                        <div className="switch">
                                            <label><input type="checkbox" /><span className="lever"></span></label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    </div>
)