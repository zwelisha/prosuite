import PrimaryButton from "../button";
import GreenButton from "../green-button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import headerImage from "../../public/ProSuite-web-Icons 1.png"
const Header = () => {
    return (
        <div id="intro-section" className="mt-50 mb-50">
            <Container>
                <Grid container spacing={2}>
                    <Grid md={7} item>
                        <div>
                            <Typography id="welcome-text" className="text-border-green font-weight-400 text-medium-large">
                                Welcome to ProSuite
                            </Typography>
                        </div>
                    </Grid>
                    <Grid md={5} item>
                        <div>
                            <Image src={headerImage}
                            alt="DISCOVER PROSUITE HEADER"
                            placeholder="blur"
                            className="responsive-image"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div id="discover-section">
                <Typography className="text-linear-gradient-blue text-extra-large line-height-88 mt-25">
                    Discover<br className="hide-on-mobile"/> the power of<br className="hide-on-mobile"/> Software
                </Typography>
                <div id="discover-sub-section">
                    <p className="text-light-grey text-medium line-height-24">
                        Every day, our clients are faced with challenges and opportunities.
                        We help them solve their problems by connecting them to
                        information technology. We offer solutions that grow,
                        empower and help businesses.
                    </p>
                    <PrimaryButton text="GET STARTED" />&nbsp;
                    <GreenButton text="REQUEST A DEMO"/>
                </div>
            </div>
        </div>
    );
}
export default Header;