
import './header.scss';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../../components/card/Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Nav from '../../components/nav/Nav';
import Nav from '../../components/nav/Nav';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonIcon from '@mui/icons-material/Person';
import { Icon } from '@iconify/react';


function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        <Link to='/'></Link>
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };


    return (
        <div className="mainheader">
            {/* <div className="mainheader__box"> */}
            <div className="mainheader__left">

                <Link to="/homepage">
                    <HomeIcon></HomeIcon>
                </Link>
                <Link to="/choosecourse">
                <HowToRegIcon></HowToRegIcon>
                </Link>
                <Link to="/horses">
                    <Icon icon="mdi:horse" />   
                    {/* Our Horses */}
                </Link>
                <Link to="/trainers">
                    Our trainers
                </Link>
                
                {/* userLevel */}
             
                {/* <Link to="/TableDatePicker">
                    Register2
                </Link> */}
                {/* <Link to="/TableDatePicker">
                    offers
                </Link> */}
            
                {/* <Link to="/courseregistration2">
                    Register3
                </Link> */}
            </div>
            <div className="mainheader__right">
            <PersonIcon  id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>  </PersonIcon>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem>  <Link to="/SignIn"> Logout</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose1}>Close</MenuItem>
                </Menu>
            </div>
        </div>

        // </div>



    );
}

export default Header;