import PrimaryButton from "../button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import VerticalLine from "../vertical-line";
import Link from "next/link";
const Solutions = () => {
    return (
        <div id="solutions-section">
            <Container>
                <div className="centered-div">
                    <Typography
                        className="text-linear-gradient-blue text-large text-left-bordered-green">
                        <span style={{fontWeight: 'bold', paddingLeft: '5px'}}>Our</span> Solutions
                    </Typography>
                </div>
                <div>
                    <Grid container spacing={0} className="mb-50 mt-50">
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Asset Management</h3>
                            <p className="text-light-grey text-medium line-height-24 solution-body-content">
                                Gain control of your asset with Software that helps you keep track of your physical assets.
                            </p>
                            <Link href="#" passHref>
                                <PrimaryButton text="LEARN MORE"/>
                            </Link>
                        </Grid>
                        <Grid className="hide-on-mobile" md={1} item sx={{display: 'flex', alignItems: 'center', verticalAlign: 'center' }}>
                            <VerticalLine/>
                        </Grid>
                        <Grid md={3} item>
                            <h3 className="text-linear-gradient-blue">Risk Management</h3>
                            <p className="text-light-grey text-medium line-height-24 text-left-bordered-grey solution-body-content">
                            Identify, capture and monitor enterprise risks with ease.
                            </p>
                            <Link href="#" passHref>
                                <PrimaryButton text="LEARN MORE"/>
                            </Link>
                        </Grid>
                        <Grid className="hide-on-mobile" md={1} item sx={{display: 'flex', alignItems: 'center', verticalAlign: 'center' }}>
                            <VerticalLine/>
                        </Grid>
                        <Grid md={3} item>
                            <h3 className="text-linear-gradient-blue">Documents Management</h3>
                            <p className="text-light-grey text-medium line-height-24 solution-body-content">
                                Easy-to-use solution that enables your firm to convert paper into electronic files.
                            </p>
                            <Link href="#" passHref>
                                <PrimaryButton text="LEARN MORE"/>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing={0} className="mb-50 mt-50">
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Perfomance Management</h3>
                            <p className="text-light-grey text-medium line-height-24 solution-body-content">
                                Achieve business stragetic goals with a solution ensuring organizations are running effenciently
                            </p>
                            <Link href="#" passHref>
                                <PrimaryButton text="LEARN MORE"/>
                            </Link>
                        </Grid>
                        <Grid className="hide-on-mobile" md={1} item sx={{display: 'flex', alignItems: 'center', verticalAlign: 'center' }}>
                            <VerticalLine/>
                        </Grid>
                        <Grid md={3} item>
                            <h3 className="text-linear-gradient-blue">Audit</h3>
                            <p className="text-light-grey text-medium line-height-24 solution-body-content">
                                Streamline your audit processes and comply with regulations or internal policies.
                            </p>
                            <Link href="#" passHref>
                                <PrimaryButton text="LEARN MORE"/>
                            </Link>
                        </Grid>
                        <Grid className="hide-on-mobile" md={1} item sx={{display: 'flex', alignItems: 'center', verticalAlign: 'center' }}>
                            <VerticalLine/>
                        </Grid>
                        <Grid md={3} item>
                            <h3 className="text-linear-gradient-blue">Compliance Management</h3>
                            <p className="text-light-grey text-medium line-height-24 solution-body-content">
                                Manage and meet legal requirements and comply with applicable laws and regulations.
                            </p>
                            <Link href="#" passHref>
                                <PrimaryButton text="LEARN MORE"/>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container> 
        </div>
    );
}
export default Solutions;