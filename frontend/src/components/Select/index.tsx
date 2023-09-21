import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
interface MultipleSelectProps{
    SelectData: string[]
    value: string[]
    setValue: React.Dispatch<React.SetStateAction<string[]>>
    type: "month" | "year"
}
export const MultipleSelect:React.FunctionComponent<MultipleSelectProps> = ({SelectData,setValue,value,type})=> {
  const theme = useTheme();

  const handleChange = (
    event: SelectChangeEvent<string[]>, setValue: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const {
      target: { value },
    } = event;
    setValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{type==="month"?"Mês":"Ano"}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={value}
          onChange={(event)=>handleChange(event, setValue)}
          input={<OutlinedInput label={type==="month"?"Mês":"Ano"} />}
          MenuProps={MenuProps}
        >
          {SelectData.map((data) => (
            <MenuItem
              key={data}
              value={data}
              style={getStyles(data, value, theme)}
            >
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}