import React from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Navigation = () => {
  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar>
          <Link href={"/"}>
            <p>
            Pro-Suite
            </p>
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          <Link href={"/"}>
            <Typography variant="h6"  style={{ textDecoration: 'none', color: 'inherit' }}>
            Pro-Suite
            </Typography>
          </Link>
          <Link href={"/"}>
            <Typography variant="h6"  style={{ textDecoration: 'none', color: 'inherit' }}>
            Pro-Suite
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
