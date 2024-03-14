import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import footerLogo from '../../public/footer-logo.png';
import xSocialIcon from '../../public/1.png';
import facebookSocialIcon from '../../public/2.png';
import instagramSocialIcon from '../../public/3.png';
import githubSocialIcon from '../../public/4.png';
import PrimaryButton from '../button';
import Container from "@mui/material/Container";
import Typography from"@mui/material/Typography";
import Link from "next/link";
const Footer = () => {
    return (
    <div id="contact-section">
        <footer>
            <div className='bg-green' style={{padding: "25px 0px 25px 0px"}}>
                <Container>
                    <Grid container>
                        <Grid item md={9}>
                            <Typography className="text-large">We&apos;d love to show you how our solution works</Typography>
                        </Grid>
                        <Grid item md={3} className='mb-50'>
                            <Link href="#" passHref>
                                <PrimaryButton text="REQUEST A DEMO"/>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>   
            </div>
            <div className='bg-linear-gradient-blue'>
                <Container>
                    <Grid container spacing={4} className="mt-5">
                        <Grid item md={4}>
                            <div id="footer-logo">
                                <Image src={footerLogo} 
                                    alt="PRO-SUITE FOOTER"
                                    placeholder="blur"
                                />
                            </div>
                            <p className='text-small line-height-20'>
                            ProSuite is a suite of cloud-based platforms which aims at transforming and automating enterprise tasks. 
                            Our solutions focus on user experience and easy-to-use tools including Asset Management, Risk Management and Perfomance Management.
                            </p>
                        </Grid>
                        <Grid item md={2}>
                            <div>
                                <h4>Services</h4>
                                <p className='text-small'>ProSuite Risk</p>
                                <p className='text-small'>ProSuite Docs</p>
                                <p className='text-small'>ProSuite Asset</p>
                                <p className='text-small'>ProSuite Perfomance</p>
                            </div>
                        </Grid>
                        <Grid item md={2}>
                            <div>
                                <h4>Links</h4>
                                <p className='text-small'>Home</p>
                                <p className='text-small'>About</p>
                                <p className='text-small'>Solutions</p>
                                <p className='text-small'>Contact</p>
                                <p className='text-small'>Request a Demo</p>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div>
                                <h4>Links</h4>
                                <p className='text-small line-height-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia morbi praesent nulla tempor sagittis. 
                                    Curabitur donec cursus donec risrdum nullam orci sit dictum. Molestie nunc sed amet vulputate in. 
                                    Condimentum mi massa id interdum risus, tortor nunc mauris.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Grid container spacing={1} className="pad-bottom-50">
                        <Grid item md={3}>
                            <div>
                                <p className='line-height-16 text-small'>2024 (c) ProSuite. All rights reserved.</p>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div>
                                <p className='line-height-16 text-small'>Privacy Policy</p>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                        <Grid container columnSpacing={2}  style={{justifyContent: 'flex-end'}}>
                            <Grid item>
                                <Image src={xSocialIcon} 
                                alt="X SOCIAL ICON"
                                />
                            </Grid>
                            <Grid item>
                                <Image src={facebookSocialIcon} 
                                alt="FACEBOOK SOCIAL ICON"
                                />
                            </Grid>
                            <Grid item>
                                <Image 
                                src={instagramSocialIcon} 
                                alt="INSTAGRAM SOCIAL ICON"
                                style={{align: 'left'}}
                                />
                            </Grid>
                            <Grid item>
                                <Image src={githubSocialIcon}
                                alt="GITHUB SOCIAL ICON"
                                />
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </footer>
        </div>
    );
};

export default Footer;

