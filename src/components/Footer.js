import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PortraitIcon from '@material-ui/icons/Portrait';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <Link to="/"><BottomNavigationAction label="Home" value="recents" icon={<HomeIcon/>} /></Link>
      <Link to="/about"><BottomNavigationAction label="Aboutme" value="favorites" icon={<AccessibilityIcon />} /></Link>
      <Link to="/portfolio"><BottomNavigationAction label="Portfolio" value="nearby" icon={<PortraitIcon />} /></Link>
      <Link to="/skills"><BottomNavigationAction label="skills" value="nearby" icon={<AssignmentTurnedInIcon />} /></Link>
      <Link to="/contact"><BottomNavigationAction label="Contact" value="folder" icon={<PermContactCalendarIcon />} /></Link>
      
      
      
      
    </BottomNavigation>
  );
}
