import { useEffect, useState } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

function YearSelector({ label, startYear, endYear, ...rest }) {
  const [values, setValues] = useState([startYear]);

  useEffect(() => {
    let arr = [];
    for (let i = startYear; i <= endYear; ++i) {
      arr.push(i);
    }
    setValues(arr);
  }, [endYear, startYear]);

  console.log(values);
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select {...rest} label={label}>
        {values.map((item, key) => (
          <MenuItem value={item} key={key}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default YearSelector;
