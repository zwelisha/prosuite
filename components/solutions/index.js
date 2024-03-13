import PrimaryButton from "../button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
                    <Grid container spacing={2} className="mb-50 mt-50">
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Asset Management</h3>
                            <p className="text-light-grey text-medium line-height-24">
                                Gain control of your asset with Software that helps you keep track of your physical assets.
                            </p>
                            <PrimaryButton text="LEARN MORE"/>
                        </Grid>
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Risk Management</h3>
                            <p className="text-light-grey text-medium line-height-24 text-left-bordered-grey">
                            Identify, capture and monitor enterprise risks with ease.
                            </p>
                            <PrimaryButton text="LEARN MORE"/>
                        </Grid>
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Asset Management</h3>
                            <p className="text-light-grey text-medium line-height-24">
                                Easy-to-use solution that enables your firm to convert paper into electronic files.
                            </p>
                            <PrimaryButton text="LEARN MORE"/>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing={2} className="mb-50 mt-50">
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Perfomance Management</h3>
                            <p className="text-light-grey text-medium line-height-24">
                                Achieve business stragetic goals with a solution ensuring organizations are running effenciently
                            </p>
                            <PrimaryButton text="LEARN MORE"/>
                        </Grid>
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Audit</h3>
                            <p className="text-light-grey text-medium line-height-24">
                                Streamline your audit processes and comply with regulations or internal policies.
                            </p>
                            <PrimaryButton text="LEARN MORE"/>
                        </Grid>
                        <Grid md={4} item>
                            <h3 className="text-linear-gradient-blue">Compliance Management</h3>
                            <p className="text-light-grey text-medium line-height-24">
                                Manage and meet legal requirements and comply with applicable laws and regulations.
                            </p>
                            <PrimaryButton text="LEARN MORE"/>
                        </Grid>
                    </Grid>
                </div>
            </Container> 
        </div>
    );
}
export default Solutions;