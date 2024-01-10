import React from 'react';
import './App.css';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Language} from "@mui/icons-material";
import {Language as LanguageEnum} from "./App";

interface NavbarProps {
  language: LanguageEnum,
  setLanguage: React.Dispatch<React.SetStateAction<LanguageEnum>>
}

function Navbar(props: NavbarProps) {
  const {language, setLanguage} = props;
  return (
    <AppBar position="sticky" sx={{ height: "9rem", justifyContent: "start", padding: "2rem" }}>
      <Toolbar sx={{gap: "0.7rem"}}>
        <Box sx={{ height: "100%", display: 'flex', flexGrow: 1, flexDirection: "row", alignItems: "end" }}>
          <img src={require("./static/images/img.png")} alt="" style={{ height: "10ch" }}/>
          <Box>
            <Typography component="div" sx={{
              maxWidth: "16ch",
              textAlign: "left",
              fontFamily: "Rubik",
              fontSize: "1.2rem",
              lineHeight: "1.4rem"
            }}>
              {language == LanguageEnum.ENGLISH ? "Canterbury Chinese" : "坎特伯利"}
            </Typography>
            <Typography component="div" sx={{
              maxWidth: "16ch",
              textAlign: "left",
              fontFamily: "Rubik",
              fontSize: "1.2rem",
              lineHeight: "1.4rem"
            }}>
              {language == LanguageEnum.ENGLISH ? "Christian Church" : "华语基督教会"}
            </Typography>
          </Box>
        </Box>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>{language == LanguageEnum.ENGLISH ? "HOME" : "主页"}</Button>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>{language == LanguageEnum.ENGLISH ? "ABOUT" : "关于"}</Button>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>{language == LanguageEnum.ENGLISH ? "RECORDINGS" : "录像"}</Button>
        <Button color="inherit" sx={{fontFamily: "Amiko"}}>{language == LanguageEnum.ENGLISH ? "FIND US" : "地址"}</Button>
        <Button
          color="inherit"
          sx={{backgroundColor: "#B7EAAF", margin: "2ch", paddingX: "3ch", minWidth: "12ch"}}
          onClick={() => setLanguage(language == LanguageEnum.ENGLISH? LanguageEnum.CHINESE : LanguageEnum.ENGLISH)}
        >
          <Language style={{height: "1rem", width: "1rem"}}/>
          {language == LanguageEnum.ENGLISH ? "中文" : "English"}

        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
