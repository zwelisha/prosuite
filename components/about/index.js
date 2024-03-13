import PrimaryButton from "../button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import whyImage1 from "../../public/image 5.png";
import whyImage2 from "../../public/image 6.png";
import whyImage3 from "../../public/image 7.png";
import Image from "next/image";
const About = () => {
    return (
        <div id="about-section">
            <Container>
                <div className="centered-div">
                    <Typography
                        className="text-linear-gradient-blue text-large text-left-bordered-green">
                        <span style={{fontWeight: 'bold', paddingLeft: '5px'}}>Why</span> ProSuite&#63;
                    </Typography>
                </div>
                <div>
                    <Grid container spacing={2} className="mb-50 mt-50">
                        <Grid md={4} item>
                            <div className="card-div text-centered">
                                <Image src={whyImage1}
                                alt="COMPREHENSIVE MANAGEMENT SUITE"
                                placeholder="blur"
                                />
                                <h3 className="text-light-grey">Comprehensive <br/>Management Suite</h3>
                                <p className="text-light-grey text-medium line-height-24">
                                    ProSuite is a one-stop solution for enterprise operations, offering services from asset tracking to compliance management.
                                </p>
                            </div>
                        </Grid>
                        <Grid md={4} item>
                            <div className="card-div text-centered">
                                <Image src={whyImage2}
                                alt="COMPREHENSIVE MANAGEMENT SUITE"
                                placeholder="blur"
                                />
                                <h3 className="text-light-grey">User-Friendly<br/>Design</h3>
                                <p className="text-light-grey text-medium line-height-24">
                                    With its emphasis on user experience and easy-to-use tools, ProSuite transforms complex tasks into simple operations.
                                </p>
                            </div>
                        </Grid>
                        <Grid md={4} item>
                            <div className="card-div text-centered">
                                <Image src={whyImage3}
                                alt="COMPREHENSIVE MANAGEMENT SUITE"
                                placeholder="blur"
                                />
                                <h3 className="text-light-grey">Cloud-Based<br/>Solution</h3>
                                <p className="text-light-grey text-medium line-height-24">
                                    As a flexible, cloud-based suite, ProSuite ensures business continuity and scalability, allowing businesses to manage their operations anytime, anywhere.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
export default About;