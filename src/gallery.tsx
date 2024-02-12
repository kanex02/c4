import {Page} from "./components/page";
import {Box, Typography} from "@mui/material";
import {PageSection} from "./components/pageSection";
import React, {useContext} from "react";
import {Language as LanguageEnum, LanguageContext} from "./app";

export function Gallery() {
  const language = useContext(LanguageContext);

  return (
    <Box sx={{background: "#E6EEDE"}}>
      <Page>
        <PageSection>
          <Typography variant="h3">
            {(language === LanguageEnum.ENGLISH) ? "Gallery" : ""}
          </Typography>
        </PageSection>
        <PageSection sx={{gap: "2rem"}}>
          <Typography variant="h5">
            {(language === LanguageEnum.ENGLISH) ? "March 2021 - Church's 25th Anniversary" : "2021年3月-教会成立25周年合影"}
          </Typography>
          <img src={require("./static/images/elders_photo.jpg")}
               style={{maxWidth: "100%"}}
               alt=""/>
          <img src={require("./static/images/youths_photo.jpg")}
               style={{maxWidth: "100%"}}
               alt=""/>
        </PageSection>
        <PageSection sx={{gap: "2rem"}}>
          <Typography variant="h5">
            {(language === LanguageEnum.ENGLISH) ? "Church's 25th Anniversary - Choir" : "教会成立25周年-诗班献诗"}
          </Typography>
          <img src={require("./static/images/choir.jpg")}
               style={{maxWidth: "100%"}}
               alt=""/>
        </PageSection>
        <PageSection sx={{gap: "2rem"}}>
          <Typography variant="h5">
            {(language === LanguageEnum.ENGLISH) ? "Young Working Adults' Hiking" : "社青团契郊游"}
          </Typography>
          <img src={require("./static/images/hiking.jpg")}
               style={{maxWidth: "100%"}}
               alt=""/>
        </PageSection>
        <PageSection sx={{gap: "2rem"}}>
          <Typography variant="h5">
            {(language === LanguageEnum.ENGLISH) ? "Youth Group Welcome Event" : "学生团契聚餐"}
          </Typography>
          <Box sx={{display: "flex", gap: "1rem"}}>
            <img src={require("./static/images/ygwelcome1.jpg")}
                 style={{height: "250px"}}
                 alt=""/>
            <img src={require("./static/images/ygwelcome2.jpg")}
                 style={{height: "250px"}}
                 alt=""/>
          </Box>
        </PageSection>
      </Page>
    </Box>
  )
}