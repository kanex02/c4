import {Page} from "./components/page";
import {Box, Typography} from "@mui/material";
import React, {useContext} from "react";
import {PageSection} from "./components/pageSection";
import {Language as LanguageEnum, LanguageContext} from "./app";

export function Contact() {
  const language = useContext(LanguageContext);


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
          <Typography variant="h4" sx={{position: "absolute", top: "40%", color: "white", backdropFilter: "blur(2px)", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "1rem 2.5rem 0.5rem"}}>
            {(language === LanguageEnum.ENGLISH) ? "Contact Us" : "联系方式"}
          </Typography>
          <img src={require("./static/images/church.jpg")}
               style={{width: "100%", height: "auto", flexShrink: 0}}
               alt=""/>
        </div>
      </Box>
      <PageSection>
        {(language === LanguageEnum.ENGLISH) ?
          <Typography variant="body1">
            Canterbury Chinese Christian Church<br/>
            <br/>
            152 Withells Rd, Avonhead, Christchurch 8042<br/>
            <br/>
            Pastor: Daniel Wu<br/>
            Phone: 021-1032605<br/>
            Email: cccc@xtra.co.nz<br/>
            <br/>
            Young Pastor: John Wu<br/>
            Phone: 021-353157<br/>
            <br/>
            Administrator: Joy Zhou<br/>
            Email: ccccnz1996@gmail.com<br/>
            Phone: (03)357-4119 (Service Center)<br/>
            <br/>
            <br/>
            Lincoln/Rolleston Branch<br/>
            <br/>
            20A James St, Lincoln (Lincoln Union Church)<br/>
            <br/>
            Pastor: Yu Ruohong<br/>
            Phone: 027-6159796<br/>
          </Typography>
          :
          <Typography variant="body1">
            坎特伯利华语基督教会<br/>
            <br/>
            152 Withells Rd, Avonhead, Christchurch 8042<br/>
            <br/>
            牧师：吴诚<br/>
            手机: 021-1032605<br/>
            Email: cccc@xtra.co.nz<br/>
            <br/>
            传道: 传道<br/>
            手机: 021-353157<br/>
            <br/>
            干事: Zhou Ying<br/>
            Email: ccccnz1996@gmail.com<br/>
            手机: (03)357-4119 (Service Center)<br/>
            <br/>
            <br/>
            林肯/活石分会<br/>
            <br/>
            20A James St, Lincoln (Lincoln Union Church)<br/>
            <br/>
            牧师: Yu Ruohong<br/>
            手机: 027-6159796<br/>
          </Typography>
        }
      </PageSection>
    </Page>
  )
}