import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoImage from "../../public/logo.png";
import Image from "next/image";
import GreenButton from "../green-button";
import Link from "next/link";
const pages = ['Home', 'About', 'Solutions', 'Contact'];
const sectionLinks = ['intro-section', 'about-section', 'solutions-section', 'contact-section'];

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className="text-medium" position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', fontFamily: 'Montserrat' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href={`#${sectionLinks[0]}`}
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'montserrat',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                    <Image src={LogoImage} alt="PROSUITE LOGO" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon sx={{ color: '#348ADD' }} />
                            </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page, index) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography
                                    component="a"
                                    href={`#${sectionLinks[index]}`}
                                    textAlign="center"
                                    sx={{ color: '#363738', fontFamily: 'Montserrat' }}
                                >
                                    {page}
                                </Typography>
                            </MenuItem>
                        ))}
                        <Link href="#contact-section" passHref>
                            <GreenButton text="Request A Demo" href="#contact-section" />
                        </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href={`#${sectionLinks[0]}`}
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        <Image src={LogoImage} alt="PROSUITE LOGO" />
                    </Typography>
                    <Box
                        sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'flex-end',
                        }}
                    >
                        {pages.map((page, index) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: '#363738', display: 'block' }}
                            href={`#${sectionLinks[index]}`}
                        >
                            {page}
                        </Button>
                        ))}
                        <Link className="mt-15" href="#contact-section" passHref>
                            <GreenButton text="Request A Demo" href="#contact-section" />
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;
