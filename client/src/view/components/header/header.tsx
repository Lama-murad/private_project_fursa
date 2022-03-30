
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
                    {/* <HomeIcon></HomeIcon> */}
                    <Icon icon="ant-design:home-outlined" width="25" height="25" />
                </Link>
                <Link to="/choosecourse">
                {/* <HowToRegIcon></HowToRegIcon> */}
                <Icon icon="ic:outline-app-registration" width="25" height="25" />
                </Link>
                <Link to="/horses">
                    {/* <Icon icon="mdi:horse" />  */}
                    <Icon icon="emojione-monotone:horse-face" width="25" height="25" />
              
                </Link>
                <Link to="/trainers">
                <Icon icon="emojione-monotone:horse-racing" width="25" height="25" />
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
                    <MenuItem>  <Link to="/SignIn"><Icon icon="clarity:logout-line" width="25" height="25" /></Link>
                    </MenuItem>
                    {/* <MenuItem><Link to="/myData"><Icon icon="fluent:more-circle-20-regular" width="25" height="25" /></Link></MenuItem> */}
                    <MenuItem onClick={handleClose1}><Icon icon="ci:off-close" width="25" height="25" /></MenuItem>
   
                </Menu>
            </div>
        </div>

        // </div>



    );
}

export default Header;