import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import YearSelector from "./YearSelector";

function Education({ setActiveStep }) {
  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      education: [{ course: "", degree: "", startYear: "", endYear: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
    shouldUnregister: false,
  });

  const onSubmit = () => null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <b>Education</b>
          </Typography>
        </Grid>
        <Grid item xs>
          <TextField
            label="University"
            helperText={"Name of University"}
            fullWidth
          />
        </Grid>
        {fields.map((field, idx) => (
          <Grid
            marginTop={4}
            container
            alignItems="center"
            spacing={2}
            key={field.id}
          >
            <Grid item container spacing={4}>
              <Grid item xs={8}>
                <TextField
                  {...register(`eduaction[${idx}].course`)}
                  label="Specialization"
                  fullWidth
                  helperText={"i.e. Software Development"}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel>Academic's Degree</InputLabel>
                  <Select
                    {...register(`education[${idx}].degree`)}
                    label="Academic's Degree"
                  >
                    <MenuItem value={"bachelor"}>Bachelor's degree</MenuItem>
                    <MenuItem value={"master"}>Master's degree</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container xs={8} columnSpacing={4}>
              <Grid item xs>
                <YearSelector
                  label="Start Year"
                  {...register(`education[${idx}].startYear`)}
                  startYear={2017}
                  endYear={2025}
                />
              </Grid>
              <Grid item xs>
                <YearSelector
                  {...register(`education[${idx}].endYear`)}
                  label="EndYear"
                  startYear={2017}
                  endYear={2025}
                />
              </Grid>
              <Grid item>
                <Button color="error" onClick={() => remove(idx)}>
                  DELETE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs>
          <Button variant="outlined" onClick={() => append({})}>
            Add One more Institution
          </Button>
        </Grid>
        <Grid container justifyContent="space-between" marginTop={3}>
          <Button startIcon={<ArrowBackIosNewIcon />} variant="outlined">
            Back
          </Button>
          <Button
            endIcon={<NavigateNextIcon />}
            variant="contained"
            color="primary"
            // type="submit"
            onClick={() => setActiveStep((p) => p + 1)}
          >
            Save & Continue
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Education;
