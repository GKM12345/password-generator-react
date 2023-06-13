import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

import pgStyles from './styles';

const  arr = Array.from(Array(26));
const capArr = arr.map((e,index)=>index+65);
const capStr = capArr.map((e)=> String.fromCharCode(e));
const smArr = arr.map((e,index)=> index+97);
const smStr = smArr.map((e)=> String.fromCharCode(e));

function PGIndex() {

  const classes = pgStyles();


  const [passGeneratedValue, setPassGeneratedValue] = useState('okdfsdfds');
  const [length, setLength] = useState(6);
  const [capitalLetter, setCapitalLetter] = useState(true);
  const [smallLetter, setSmallLetter] = useState(true);
  const [number, setNumber] = useState(true);
  const [specialChar, setSpecialChar] = useState(false);

  const isOneChecked = () => {
    return capitalLetter || smallLetter || number || specialChar;
  }

  const handleSubmit = async () => {
    const res = await isOneChecked();
    if(!res) {
      return;
    }
    console.log(capStr);
    console.log(smStr);
  }

  return (
    <Box className={classes.mainDiv}>
      <Box className={classes.passGenDiv}>
        <Box className={classes.passGenHeader}>Password Generator</Box>
        <Box className={classes.passGenBody}>
          <Box className={classes.passShowBox}>
            <Paper
              elevation={10}
              className={classes.passShowVal}
            >
              <Box>{passGeneratedValue}</Box>
              <Box className={classes.clipBoard}><ContentCopyIcon /></Box>
            </Paper>
          </Box>
          <Box className={classes.SelectBoxDiv}>
            <Box className={classes.EachSelectBox}>
              <Box>Capital Letters</Box>
              <Checkbox 
                checked={capitalLetter}
                onChange={(e)=>{setCapitalLetter(e.target.checked)}}
              />
            </Box>
            <Box className={classes.EachSelectBox}>
              <Box>Small Letters</Box>
              <Checkbox
                checked={smallLetter}
                onChange={(e)=>{setSmallLetter(e.target.checked)}} 
              />
            </Box>
            <Box className={classes.EachSelectBox}>
              <Box>Numbers</Box>
              <Checkbox 
                checked={number}
                onChange={(e)=>{setNumber(e.target.checked)}}
              />
            </Box>
            <Box className={classes.EachSelectBox}>
              <Box>Special Characters</Box>
              <Checkbox 
                checked={specialChar}
                onChange={(e)=>{setSpecialChar(e.target.checked)}}
              />
            </Box>
            <Box className={classes.EachSelectBox} sx={{marginTop: '10px'}}>
              <Box>Length</Box>
              <TextField
                type="number"
                value={length}
                onChange={(e)=>{
                  if(e.target.value>15) {
                    setLength(15)
                  } else if(e.target.value<6) {
                    setLength(6)
                  } else {
                    setLength(e.target.value)
                  }
                }}
                InputProps={{
                  inputProps: {
                    max: 15, min: 6,
                    style: {
                      height: "15px",
                    },
                  }
                }}
                size="small"
              />
            </Box>
          </Box>
          <Box className={classes.GenerateButtonBoxDiv} >
            <Button variant="contained" fullWidth onClick = {handleSubmit}>
              Generate Password
            </Button>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default PGIndex
