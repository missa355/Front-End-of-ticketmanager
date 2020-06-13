import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

export default function MultipleSelect() {
    const classes = useStyles();
  const [status, setStatus] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [category, setCategory] = React.useState('');

  const [openStatus, setOpenS] = React.useState(false);
  const [openPriority, setOpenP] = React.useState(false);
  const [openCategory, setOpenC] = React.useState(false);



  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };
  
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleCloseS = () => {
    setOpenS(false);
  };

  const handleOpenS = () => {
    setOpenS(true);
  };
  
//   
  const handleCloseP = () => {
    setOpenP(false);
  };

  const handleOpenP = () => {
    setOpenP(true);
  };
// 
  const handleCloseC = () => {
    setOpenC(false);
  };

  const handleOpenC = () => {
    setOpenC(true);
  };
// 
  return (
    <div>
      {/* <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openStatus}
          onClose={handleCloseS}
          onOpen={handleOpenS}
          value={status}
          onChange={handleStatus}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={10}>New</MenuItem>
          <MenuItem value={20}>In-Progress</MenuItem>
          <MenuItem value={30}>Resolved</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Priority</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openPriority}
          onClose={handleCloseP}
          onOpen={handleOpenP}
          value={priority}
          onChange={handlePriority}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={10}>Urgent</MenuItem>
          <MenuItem value={20}>High</MenuItem>
          <MenuItem value={30}>Normal</MenuItem>
          <MenuItem value={40}>Low</MenuItem>

        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openCategory}
          onClose={handleCloseC}
          onOpen={handleOpenC}
          value={category}
          onChange={handleCategory}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={10}>Software</MenuItem>
          <MenuItem value={20}>Newtork</MenuItem>
          <MenuItem value={30}>Hardware</MenuItem>
          <MenuItem value={30}>Logistics</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
