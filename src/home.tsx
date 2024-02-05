import React, {useContext} from 'react';
import './app.css';
import {Box, Link, Typography} from "@mui/material";
import {Map, Today} from "@mui/icons-material";
import InfoCard from "./components/infoCard";
import {Language, LanguageContext} from "./app";

function Home() {
  const language = useContext(LanguageContext);

  return (
    <div className="App" style={{padding: "1rem"}}>
      <Box sx={{width:"100%", display: "flex", justifyContent: "center", position: "relative", overflow: "hidden"
      }}>
        <img src={require("./static/images/background pic.jpg")} style={{width: "100%", height: "auto", filter: "brightness(75%)"}}
             alt=""></img>
        <Box sx={{
          position: "absolute",
          top: 0,
          width: "95%",
          height: "95%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0 1rem"
        }}
        >
          <Typography variant={"h2"} sx={{color: "white", fontFamily: "Noto Serif SC", fontSize: {xs: "2rem", sm: "2rem", md: "3rem", lg: "3.75rem"}}}>
            坎特伯利
          </Typography>
          <Typography variant={"h2"} sx={{color: "white", fontFamily: "Noto Serif SC", fontSize: {xs: "2rem", sm: "2rem", md: "3rem", lg: "3.75rem"}}}>
            华语基督教会
          </Typography>
          <Typography variant={"h4"} sx={{color: "white", fontFamily: "Rubik", fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "3rem"}}}>
            Canterbury Chinese Christian Church
          </Typography>
        </Box>
      </Box>
      <Box sx={{padding: {xs: "3rem 1rem", sm: "3rem 1rem", md: "5rem"}, display: "flex", justifyContent: "center"}}>
        <InfoCard sx={{maxWidth: "100%", overflow: "initial"}}>
          <Typography variant="h4" sx={{fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "3rem"}}}>
            {language === Language.ENGLISH ? "Join us this Sunday" : "欢迎参加主日敬拜"}
          </Typography>
          <img
            src={require("./static/images/sermon_1.png")}
            style={{width: "25rem", maxWidth: "80%"}}
            alt={language === Language.ENGLISH ? "Picture of a service" : "主日敬拜的照片"}
          />

          <Box sx={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            flexWrap: "wrap"
          }}>
            <div style={{width: "220px", flexShrink: 0}}>
              <Today style={{marginTop: "2rem", fontSize: "3rem"}}/>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "2pm every Sunday" : "2pm 每周日"}
              </Typography>
            </div>

            <Link href="https://maps.app.goo.gl/CBTuM1yidHDhVBKH9"
               target="_blank"
               rel="noopener noreferrer"
               sx={{color: "black", flexShrink: 0, textDecorationColor: "transparent !important",
                 transition: "0.2s ease-in-out",'&:hover':{textDecorationColor: "grey !important"}}}
            >
              <Box sx={{width: "220px"}}>
                <Map sx={{marginTop: "2rem", fontSize: "3rem"}}/>
                <Typography variant="h6">
                  150 Withells Road,
                </Typography>
                <Typography variant="h6">
                  Avonhead, Christchurch
                </Typography>
              </Box>
            </Link>

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
      <Box sx={{padding: "5rem", display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Typography variant="h5" sx={{width: "fit-content"}}>
          {language === Language.ENGLISH ? "Group Services" : "团契敬拜"}
        </Typography>
        <Box sx={{gap: "3rem"}}>
          <Box sx={{display: "flex", gap: "3rem", marginTop: "3rem", flexWrap: "wrap", justifyContent: "center"}}>
            <div style={{width: "350px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={require("./static/images/list_sunday_school_img 1.png")} alt="Zoom logo" style={{height: "200px", marginBottom: "1.5rem"}}/>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "Sunday School" : "主日学"}
              </Typography>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "Sunday 2pm" : "周日 2pm"}
              </Typography>
            </div>

            <div style={{width: "350px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={require("./static/images/list_youth_group_img 1.png")} alt="Zoom logo" style={{height: "200px", marginBottom: "1.5rem"}}/>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "Young Adult Group" : "社青团契"}
              </Typography>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "Saturday 7:30pm" : "周六 7：30pm"}
              </Typography>
              <Typography variant="h6">
                &
              </Typography>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "Student Group" : "学生团契"}
              </Typography>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "Saturday 5pm" : "周六 5pm"}
              </Typography>
            </div>

            <div style={{width: "350px", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <img src={require("./static/images/list_family_group_img 1.png")} alt="Zoom logo" style={{height: "200px", marginBottom: "1.5rem"}}/>
              <Typography variant="h6">
                {language === Language.ENGLISH ? "Family Group" : "新枝小组"}
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
