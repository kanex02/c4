import React, {useContext} from 'react';
import './App.css';
import {Box, Typography} from "@mui/material";
import {Map, Today} from "@mui/icons-material";
import InfoCard from "./components/InfoCard";
import {Language, LanguageContext} from "./App";

function Home() {
  const language = useContext(LanguageContext);

  return (
    <div className="App" style={{padding: "1rem"}}>
      <Box sx={{width:"100%", display: "flex", justifyContent: "center", position: "relative", overflow: "hidden"
      }}>
        <img src={require("./static/images/background pic.jpg")} style={{width: "100%", height: "auto", filter: "brightness(75%)"}}
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
      <Box sx={{padding: "5rem", display: "flex", justifyContent: "center"}}>
        <InfoCard sx={{maxWidth: "100%", overflow: "initial"}}>
          <Typography variant="h4">
            {language == Language.ENGLISH ? "Join us this Sunday" : "欢迎参加主日敬拜"}
          </Typography>
          <img
            src={require("./static/images/sermon_1.png")}
            style={{width: "25rem"}}
            alt={language == Language.ENGLISH ? "Picture of a service" : "主日敬拜的照片"}
          />

          <Box sx={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            flexWrap: "wrap",
            sm: {
              color: "red"
            }
          }}>
            <div style={{width: "220px", flexShrink: 0}}>
              <Today style={{marginTop: "2rem", fontSize: "3rem"}}/>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "2pm every Sunday" : "2pm 每周日"}
              </Typography>
            </div>

            <a href="https://maps.app.goo.gl/CBTuM1yidHDhVBKH9"
               target="_blank"
               rel="noopener noreferrer"
               style={{color: "black", textDecoration: "underline", flexShrink: 0}}
            >
              <Box sx={{width: "220px", textDecoration: "underline",
                textDecorationColor: "transparent", transition: "0.2s ease-in-out",'&:hover':{textDecorationColor: "grey"}}}>
                <Map sx={{marginTop: "2rem", fontSize: "3rem"}}/>
                <Typography variant="h6">
                  150 Withells Road,
                </Typography>
                <Typography variant="h6">
                  Avonhead, Christchurch
                </Typography>
              </Box>
            </a>

            <div style={{width: "220px", flexShrink: 0}}>
              <div style={{height: "48px", marginTop: "2rem", display: "flex",
                justifyContent: "center",
                alignItems: "center",}}>
                <img src={require("./static/images/zoom1.png")} alt="Zoom logo"
                     style={{height: "24px"}}/>
              </div>
              <Typography variant="h6">
                534 361 6425
              </Typography>
            </div>
          </Box>

        </InfoCard>
      </Box>
      <Box sx={{padding: "5rem", display: "flex", justifyContent: "center"}}>
        <Box sx={{gap: "3rem"}}>
          <Typography variant="h4">
            {language == Language.ENGLISH ? "Group Services" : "团契敬拜"}
          </Typography>

          <Box sx={{display: "flex", gap: "3rem", marginTop: "3rem", flexWrap: "wrap", justifyContent: "center"}}>
            <div style={{width: "350px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={require("./static/images/list_sunday_school_img 1.png")} alt="Zoom logo" style={{height: "200px", marginBottom: "1.5rem"}}/>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "Sunday School" : "主日学"}
              </Typography>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "Sunday 2pm" : "周日 2pm"}
              </Typography>
            </div>

            <div style={{width: "350px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={require("./static/images/list_youth_group_img 1.png")} alt="Zoom logo" style={{height: "200px", marginBottom: "1.5rem"}}/>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "Young Adult Group" : "社青团契"}
              </Typography>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "Saturday 7:30pm" : "周六 7：30pm"}
              </Typography>
              <Typography variant="h6">
                &
              </Typography>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "Student Group" : "学生团契"}
              </Typography>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "Saturday 5pm" : "周六 5pm"}
              </Typography>
            </div>

            <div style={{width: "350px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={require("./static/images/list_family_group_img 1.png")} alt="Zoom logo" style={{height: "200px", marginBottom: "1.5rem"}}/>
              <Typography variant="h6">
                {language == Language.ENGLISH ? "Family Group" : "新枝小组"}
              </Typography>
            </div>
          </Box>

        </Box>
      </Box>
    </div>
  );
}

export default Home;
