import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { TextField, Button } from "@mui/material";
import Selector from "./Selector";
import { useForm } from "react-hook-form";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Skills({ setActiveStep }) {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <b>Skills</b>
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item xs>
            <TextField
              label="Professional Title"
              helperText={"i.e. Web Developer"}
              fullWidth
            />
          </Grid>
          <Grid item xs>
            <TextField
              label="Select Service"
              helperText={"Services you offer to clients"}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Selector
            name="skills"
            label="Skill"
            control={control}
            defaultValue={[]}
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Professional Overview"
            helperText={"Write about your projects, skills, experience."}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid container justifyContent="space-between" marginTop={3}>
          <Button startIcon={<ArrowBackIosNewIcon />} variant="outlined">
            Back
          </Button>
          <Button
            endIcon={<NavigateNextIcon />}
            variant="contained"
            color="primary"
            type="submit"
          >
            Save & Continue
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Skills;
