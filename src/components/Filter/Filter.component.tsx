import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { IFilter } from "./Filter.config";

const Filter = ({ setCategory, category }: IFilter) => {
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <div className="w-[200px]">
      <h1>Choose Genre</h1>
      <FormControl sx={{ m: 1, minWidth: 120, width: 180 }}>
        <Select
          value={category || ""}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={undefined}>None</MenuItem>
          <MenuItem value="COMEDY">Comedy</MenuItem>
          <MenuItem value="THRILLER">Thriller</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
