import { useState } from "react";

import Stepper from "../Stepper/Stepper";
import Grid from "@mui/material/Grid";
import Education from "./Steps/Education/Education";
import Skills from "./Steps/Skills/Skills";
import Experience from "./Steps/Experience/Experience";
import Portfolio from "./Steps/Portfolio/Portfolio";
import Profile from "./Steps/Profile/Profile";
// import useMediaQuery from "@mui/material/useMediaQuery";

function Form() {
  //   const mobile = useMediaQuery("(max-width: 600px)");

  const [activeStep, setActiveStep] = useState(1);

  const CURRENT_STEP = (val) => {
    switch (val) {
      case 1:
        return <Education setActiveStep={setActiveStep} />;
      case 2:
        return <Skills setActiveStep={setActiveStep} />;
      case 3:
        return <Experience setActiveStep={setActiveStep} />;
      case 4:
        return <Portfolio setActiveStep={setActiveStep} />;
      case 5:
        return <Profile setActiveStep={setActiveStep} />;
      default:
        return <Education setActiveStep={setActiveStep} />;
    }
  };

  return (
    <Grid container p={2} rowSpacing={4} alignItems="center">
      <Grid item xs={12} md={3}>
        <Stepper activeStep={activeStep - 1} />
      </Grid>
      <Grid item md={9} xs={12}>
        {CURRENT_STEP(activeStep)}
      </Grid>
    </Grid>
  );
}

export default Form;
