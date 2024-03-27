import React, { useState, useEffect } from 'react';
import './css/Menu.css';
import { NavLink } from "react-router-dom";
import Main from "./Main";
import axios from "axios";

const img = 'univ-logo.png';
const profile = 'profile_logo.png';


    const Menu = ({ username, handleLogout }) => {
        const [photoUrl, setPhotoUrl] = useState(null);
        const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    
        useEffect(() => {
            const fetchPhoto = async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/api/user/photo?username=${username}`);
                    if (response.data && response.data.photoUrl) {
                        setPhotoUrl(response.data.photoUrl);
                    }
                } catch (error) {
                    console.error('Error fetching photo:', error);
                }
            };
    
            fetchPhoto();
        }, [username]);
    
        const toggleProfileDropdown = () => {
            setProfileDropdownVisible(!profileDropdownVisible);
        };
    
    const Profiledrop = () =>{
        if(document.getElementById('profile-dropdown1').style.display === 'block'){
            document.getElementById('profile-dropdown1').style.display = 'none';
        }else{
            document.getElementById('profile-dropdown1').style.display = 'block';
        }
    }

    const Show = () =>{
        if(document.getElementById('submenu').style.display === 'block'){
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu').style.display = 'block';
            document.getElementById('drop').className = 'fas fa-angle-down';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            /*document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';*/
        }
    }

    const Show1 = () =>{
        if(document.getElementById('submenu1').style.display === 'block'){
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu1').style.display = 'block';
            document.getElementById('drop1').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            /*document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';*/
        }
    }

    const Show2 = () =>{
        if(document.getElementById('submenu2').style.display === 'block'){
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu2').style.display = 'block';
            document.getElementById('drop2').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
            /*document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';*/
        }
    }

    const Show3 = () =>{
        if(document.getElementById('submenu3').style.display === 'block'){
            document.getElementById('submenu3').style.display = 'none';
            document.getElementById('drop3').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu3').style.display = 'block';
            document.getElementById('drop3').className = 'fas fa-angle-down';
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop1').className = 'fas fa-angle-right';
            document.getElementById('submenu2').style.display = 'none';
            document.getElementById('drop2').className = 'fas fa-angle-right';
            /*document.getElementById('submenu4').style.display = 'none';
            document.getElementById('drop4').className = 'fas fa-angle-right';
            document.getElementById('submenu5').style.display = 'none';
            document.getElementById('drop5').className = 'fas fa-angle-right';
            document.getElementById('submenu6').style.display = 'none';
            document.getElementById('drop6').className = 'fas fa-angle-right';
            document.getElementById('submenu7').style.display = 'none';
            document.getElementById('drop7').className = 'fas fa-angle-right';*/
        }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-2 col-md-2 menu m-0 p-0">
                        <div className="top-logo-div">
                            <img src={img} alt={img} className="top-logo"></img>
                        </div>

                        <div className="menu-items">
                            <nav>
                                <NavLink to={''} className={'nav mt-3'} id="active"><i class="fas fa-home"></i>Dashboard</NavLink>
                                <NavLink to={''} className={'nav'} onClick={Show}><i class="far fa-user"></i>Student<i id="drop" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu">
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> Add Student</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> View Student</NavLink>
                                    </div>
                                <NavLink to={''} className={'nav'} onClick={Show1}><i class="far fa-user"></i>Teacher<i id="drop1" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu1">
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> Add Teacher</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> View Teacher</NavLink>
                                    </div>  
                                <NavLink to={''} className={'nav'} onClick={Show2}><i class="far fa-user"></i>Staff<i id="drop2" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu2">
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> Add Staff</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> View Staff</NavLink>
                                    </div>
                                <NavLink to={''} className={'nav'} onClick={Show3}><i class="fas fa-bus"></i>Transport<i id="drop3" className="fas fa-angle-right"></i></NavLink>
                                    <div id="submenu3">
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> Add Transport</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> View Transport</NavLink>
                                        <NavLink to={''} className={'sub-nav'}><i class="fas fa-caret-right"></i> Running Status</NavLink>
                                    </div>
                                <NavLink to={''} className={'nav'}><i class="fas fa-table"></i>Attendance</NavLink>
                                <NavLink to={''} className={'nav'}><i class="far fa-bookmark"></i>Course<i id="drop4" className="fas fa-angle-right"></i></NavLink>
                                <NavLink to={''} className={'nav'}><i class="fas fa-book"></i>Syllabus<i id="drop5" className="fas fa-angle-right"></i></NavLink>
                                <NavLink to={''} className={'nav'}><i class="far fa-copy"></i>Exam<i id="drop6" className="fas fa-angle-right"></i></NavLink>
                                <NavLink to={''} className={'nav'}><i class="far fa-calendar-alt"></i>Result<i id="drop7" className="fas fa-angle-right"></i></NavLink>
                                <NavLink to={''} className={'nav'}><i class="fas fa-rupee-sign"></i>Payment<i id="drop8" className="fas fa-angle-right"></i></NavLink>
                                <NavLink to={''} className={'nav'}><i class="fas fa-globe-africa"></i>Website</NavLink>
                                <NavLink to={''} className={'nav'}><i class="far fa-copy"></i>Certificate<i id="drop9" className="fas fa-angle-right"></i></NavLink>
                                <NavLink to={''} className={'nav'}><i class="fas fa-book"></i>Library<i id="drop10" className="fas fa-angle-right"></i></NavLink>
                                <NavLink to={''} className={'nav'}><i class="far fa-calendar-alt"></i>Admission<i id="drop11" className="fas fa-angle-right"></i></NavLink>
                            </nav>
                        </div>
                    </div>

                    <div className="col-12 col-lg-10 col-md-10 m-0 p-0 top-header">
                        <form action="" method="">
                            <div className="search-area">
                                <i class="fas fa-search" style={{color:'rgb(182, 140, 180)', position:'absolute', top:'15px', left:'20px'}}></i>
                                <input type="search" placeholder="Search here..." style={{width:'350px', height:'30px', margin:'7px 10px', padding:'14px 35px', border:'1px solid rgb(219, 180, 217)', borderRadius:'5px'}}></input>
                            </div>
                        </form>
                 
                        <div className="right-icon-area">
                            <span>
                            {photoUrl!=null?( <img onClick={Profiledrop}  src={`http://localhost:8000/uploads/${photoUrl}`} alt={photoUrl}></img>):(<p>No photo available</p>)}
                               
                               
                                <i class="fas fa-bell"></i>
                                <i class="fas fa-envelope"></i>
                            </span>
                            <div className="profile-dropdown" id="profile-dropdown1">
                                <nav>
                                    <NavLink to={''} className={'nav-profile pt-3'}><i class="far fa-user-circle"></i>Hi,{username}</NavLink>
                                   
                                    <NavLink to={''} className={'nav-profile'}><i class="far fa-user-circle"></i>My Profile</NavLink>
                                    <NavLink to={''} className={'nav-profile'}><i class="fas fa-cog"></i>Settings</NavLink>
                                  <NavLink to={''} className={'nav-profile'} id="no-border" onClick={() => handleLogout(username)}><i className="fas fa-sign-out-alt" style={{ color: 'darkred' }}></i>Logout</NavLink>
                                </nav>
                            </div>
                        </div>

                        <Main/>

                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Menu;