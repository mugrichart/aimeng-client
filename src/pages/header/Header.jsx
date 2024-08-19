

import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Header = () => {
  return (
    <header>
        <nav>
          <Link to=""><HomeIcon />Home</Link>
          <Link to="info"><InfoIcon />info</Link>
          <Link to="record"><VisibilityIcon />record</Link>
        </nav>
    </header>
  )
}

export default Header
