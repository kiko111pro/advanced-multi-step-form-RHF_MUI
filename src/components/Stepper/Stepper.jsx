import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Avatar from "@mui/material/Avatar";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import useMediaQuery from "@mui/material/useMediaQuery";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  //   flexDirection: "column",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => {
  const mobileWidth = useMediaQuery("(max-width: 600px)");
  return {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 16,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: theme.palette.success.light,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: theme.palette.success.light,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: mobileWidth ? 3 : 15,
      maxWidth: !mobileWidth && 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
      marginLeft: !mobileWidth && 3,
    },
  };
});

function ColorlibStepIcon(props) {
  const { active, completed } = props;

  return (
    <>
      {completed ? (
        <CheckBoxIcon sx={{ color: "success.light" }} fontSize="large" />
      ) : (
        <Avatar
          sx={{
            bgcolor: active ? "success.light" : "#eaeaf0",
            width: "26.2667px",
            height: "26.2667px",
            // p: 1,
            m: "5px",
            fontSize: "1rem",
          }}
          variant="rounded"
        >
          <b>{props.icon}</b>
        </Avatar>
      )}
    </>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Education", "Skills", "Experience", "Portfolio", "Profile"];

export default function CustomizedSteppers({ activeStep }) {
  const mobileWidth = useMediaQuery("(max-width: 600px)");

  return (
    <Stepper
      alternativeLabel={mobileWidth}
      orientation={mobileWidth ? "horizontal" : "vertical"}
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
