import {Page} from "./components/page";
import {Box, Typography} from "@mui/material";
import React from "react";
import {PageSection} from "./components/pageSection";

export function FindUs () {
  return (
    <Page>
      <Box sx={{
        maxHeight: "65vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center"
      }}>
        <div style={{position: "relative", display: "flex", justifyContent: "center"}}>
          <Typography variant="h3" sx={{position: "absolute", top: "40%", color: "white", backdropFilter: "blur(2px)", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "1rem 2.5rem 0.5rem"}}>
            Find Us
          </Typography>
          <img src={require("./static/images/sermon.jpg")}
               style={{width: "100%", height: "auto", flexShrink: 0}}
               alt=""/>
        </div>
      </Box>
      <PageSection>
        <Typography variant="h5">
          Join Us
        </Typography>
      </PageSection>
      <PageSection sx={{marginTop: "2rem"}}>
        <Typography variant="body1" sx={{textAlign: "center"}}>
          Sunday<br/>
          <br/>
          2:00pm<br/>
          Sunday Service/Sunday School<br/>
          -<br/>
          150 Withells Rd, Avonhead (St. Mark's Church)
        </Typography>
      </PageSection>
      <hr style={{width: "30%", marginTop: "1rem"}}/>
      <PageSection sx={{marginTop: "4rem"}}>
        <Typography variant="body1" sx={{textAlign: "center"}}>
          Tuesday<br/>
          <br/>
          10:00am<br/>
          Church Prayer Meeting (in person)<br/>
          -<br/>
          152 Withells Rd, Avonhead (Service Centre)
        </Typography>
        <br/>
        <Typography variant="body1" sx={{textAlign: "center"}}>
          7:30pm<br/>
          Bible Study (on Zoom)<br/>
          -<br/>
          Zoom: 534 361 6425, Password: 1234
        </Typography>
      </PageSection>
      <hr style={{width: "30%", marginTop: "1rem"}}/>
      <PageSection sx={{marginTop: "4rem"}}>
        <Typography variant="body1" sx={{textAlign: "center"}}>
          Saturday<br/>
          <br/>
          5:00pm<br/>
          Youth Group (in person)<br/>
          -<br/>
          152 Withells Rd, Avonhead (Service Centre)
        </Typography>
        <br/>
        <Typography variant="body1" sx={{textAlign: "center"}}>
          7:30pm<br/>
          Young Working Adults (in person and on Zoom)<br/>
          -<br/>
          Contact us for details
        </Typography>
      </PageSection>
      <hr style={{width: "30%", marginTop: "1rem"}}/>
    </Page>
  )
}