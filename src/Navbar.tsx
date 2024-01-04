import React from 'react';
import './App.css';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Language} from "@mui/icons-material";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ height: "9rem", justifyContent: "start", padding: "2rem" }}>
      <Toolbar sx={{gap: "0.7rem"}}>
        <Box sx={{ height: "100%", display: 'flex', flexGrow: 1, flexDirection: "row", alignItems: "end" }}>
          <img src={require("./static/images/img.png")} alt="" style={{ height: "10ch" }}/>
          <Typography component="div" sx={{ maxWidth: "18ch", textAlign: "left", fontFamily: "Rubik", fontSize: "1.2rem", lineHeight: "1.4rem" }}>
            Canterbury Chinese Christian Church
          </Typography>
        </Box>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>HOME</Button>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>ABOUT</Button>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>RECORDINGS</Button>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>FIND US</Button>
        <Button color="inherit" sx={{backgroundColor: "#B7EAAF", margin: "2ch", paddingX: "3ch", minWidth: "12ch"}} ><Language style={{height: "1rem", width: "1rem"}}/>中文</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
