import {Page} from "./components/page";
import {Box, Typography} from "@mui/material";
import React from "react";
import {PageSection} from "./components/pageSection";

export function Contact() {
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
            Contact Us
          </Typography>
          <img src={require("./static/images/church.jpg")}
               style={{width: "100%", height: "auto", flexShrink: 0}}
               alt=""/>
        </div>
      </Box>
      <PageSection>
        <Typography variant="body1">
          Canterbury Chinese Christian Church<br/>
          <br/>
          152 Withells Rd, Avonhead, Christchurch 8042<br/>
          <br/>
          Pastor: Wu Cheng<br/>
          Phone: 021-1032605<br/>
          Email: cccc@xtra.co.nz<br/>
          <br/>
          Young Pastor: Wu Zhaozhong<br/>
          Phone: 021-353157<br/>
          <br/>
          Administrator: Zhou Ying<br/>
          Email: ccccnz1996@gmail.com<br/>
          Phone: (03)357-4119 (Service Center)<br/>
          <br/>
          <hr/>
          <br/>
          Lincoln/Rolleston Branch<br/>
          <br/>
          20A James St, Lincoln (Lincoln Union Church)<br/>
          <br/>
          Pastor: Yu Ruohong<br/>
          Phone: 027-6159796<br/>
        </Typography>
      </PageSection>
    </Page>
  )
}