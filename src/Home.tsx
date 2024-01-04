import React from 'react';
import './App.css';
import {Box, Typography} from "@mui/material";

function Home() {
  return (
    <div className="App">
      <Box sx={{width:"100%", display: "flex", justifyContent: "center", position: "relative"}}>
        <img src={require("./static/images/background pic.jpg")} style={{width:"100%", margin: "1rem", filter: "brightness(75%)"}}
             alt="Photo of some members of our church"></img>
        <Box sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"}}
        >
          <Typography variant={"h2"} sx={{color: "white", fontFamily: "Noto Serif SC"}}>
            坎特伯利
          </Typography>
          <Typography variant={"h2"} sx={{color: "white", fontFamily: "Noto Serif SC"}}>
            华语基督教会
          </Typography>
          <Typography variant={"h4"} sx={{color: "white", fontFamily: "Rubik"}}>
            Canterbury Chinese Christian Church
          </Typography>
        </Box>
      </Box>
      <Box sx={{display: "flex", alignItems: "center", position: "relative", padding: "5rem",
        flexDirection: "column"}}>
        <Typography variant="h4" style={{marginTop: "2rem"}}>
          Join us this Sunday
        </Typography>
        <img src={require("./static/images/sermon_1.png")} style={{width: "25rem", marginTop: "6rem"}} alt="Picture of a service"/>
      </Box>
    </div>
  );
}

export default Home;
