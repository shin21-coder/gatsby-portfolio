import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'gatsby';
import MenuIcon from '@material-ui/icons/Menu';
import Image from '../../static/background.jpg';
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>
    <header style={{
      position: 'fixed',
      zIndex: 1000,
      backgroundColor:'white'
    }}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <MenuIcon />Open Menu
        

      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/about">Aboutme</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/portfolio">Portfolio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>

      
      </Menu>
    </header>


    <div style={{
      backgroundImage: `url(${Image})`,
      height: '300px',
      position:'relative'

    }}>

    </div>

    </>
  );
}
