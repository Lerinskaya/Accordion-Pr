import { FormControl, Select, MenuItem } from '@mui/material';

const CustomSelect = ({ status, onChange }) => {
  return (
    <FormControl>
      <Select
        className='select'
        labelId="demo-select-small-label"
        id="demo-select-small"
        size="small"
        value={status}
        onChange={onChange}
        MenuProps={{
          PaperProps: {
            className: 'custom-menu-paper',
          },
        }}
        sx={{
          '& .MuiSelect-root': {
            minWidth: '113px',
            width: '113px',
            height: '35px',
            minHeight: '35px',
            border: '0.5px solid #000000',
            borderRadius: 8,
            fontFamily: 'Mulish',
            fontWeight: 400,
            fontSize: '14px',
          },
          '& .MuiSelect-select': {
            height: '100%',
            backgroundColor: status === 'В работе' ? '#CEFDED' : status === 'На паузе' ? '#FFCCDD' : '',
          },
          '& .MuiFormControl-root': {
            width: '113px',
            height: '35px',
          }
        }}
      >
        <MenuItem value="Выполнена">Выполнена</MenuItem>
        <MenuItem value="В работе">В работе</MenuItem>
        <MenuItem value="На паузе">На паузе</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
