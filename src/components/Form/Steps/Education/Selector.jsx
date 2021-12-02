import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MenuItem, Box, Chip } from "@mui/material";
import { Controller } from "react-hook-form";
import { skills } from "../../../../utils/skills";

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  //   children,
  //   ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <Controller
      render={({ value }) => (
        <FormControl fullWidth>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select
            {...value}
            labelId={labelId}
            label={label}
            multiple
            defaultValue={[]}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {skills.map((skill) => (
              <MenuItem value={skill} key={skill}>
                {skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
    />
    // </FormControl>
  );
};
export default ReactHookFormSelect;
