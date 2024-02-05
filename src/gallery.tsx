import {Page} from "./components/page";
import {Box, Typography} from "@mui/material";
import {PageSection} from "./components/pageSection";
import React from "react";

export function Gallery() {
  return (
    <Box sx={{background: "#E6EEDE"}}>
      <Page>
        <PageSection>
          <Typography variant="h3">
            Gallery
          </Typography>
        </PageSection>
        <PageSection sx={{gap: "2rem"}}>
          <Typography variant="h5">
            March 2021 - Church's 25th Anniversary
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
            Choir
          </Typography>
          <img src={require("./static/images/choir.jpg")}
               style={{maxWidth: "100%"}}
               alt=""/>
        </PageSection>
        <PageSection sx={{gap: "2rem"}}>
          <Typography variant="h5">
            Young Working Adults' Hiking
          </Typography>
          <img src={require("./static/images/hiking.jpg")}
               style={{maxWidth: "100%"}}
               alt=""/>
        </PageSection>
        <PageSection sx={{gap: "2rem"}}>
          <Typography variant="h5">
            Youth Group Welcome Event
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