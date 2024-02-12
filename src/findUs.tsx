import {Page} from "./components/page";
import {Box, Typography} from "@mui/material";
import React, {useContext} from "react";
import {PageSection} from "./components/pageSection";
import {Language as LanguageEnum, LanguageContext} from "./app";

export function FindUs () {
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
          <Typography variant="h3" sx={{position: "absolute", top: "40%", color: "white", backdropFilter: "blur(2px)", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "1rem 2.5rem 0.5rem"}}>
            {(language === LanguageEnum.ENGLISH) ? "Join Us" : "聚会时间与地址"}
          </Typography>
          <img src={require("./static/images/sermon.jpg")}
               style={{width: "100%", height: "auto", flexShrink: 0}}
               alt=""/>
        </div>
      </Box>
      <PageSection>
        <Typography variant="h5">
          {(language === LanguageEnum.ENGLISH) ? "Groups and Services" : "時間表"}
        </Typography>
      </PageSection>
      <PageSection sx={{marginTop: "2rem"}}>
        {(language === LanguageEnum.ENGLISH) ?
          <Typography variant="body1" sx={{textAlign: "center"}}>
            Sunday<br/>
            <br/>
            2:00pm<br/>
            Sunday Service/Sunday School<br/>
            -<br/>
            150 Withells Rd, Avonhead (St. Mark's Church)
          </Typography>
          :
          <Typography variant="body1" sx={{textAlign: "center"}}>
            周日<br/>
            <br/>
            2:00pm<br/>
            主日聚會/儿童主日学<br/>
            -<br/>
            150 Withells Rd, Avonhead (St. Mark's Church)
          </Typography>
        }

      <br/>

      </PageSection>
      <hr style={{width: "30%", marginTop: "1rem"}}/>
      <PageSection sx={{marginTop: "4rem"}}>
        {(language === LanguageEnum.ENGLISH) ?
          <Typography variant="body1" sx={{textAlign: "center"}}>
            Tuesday<br/>
            <br/>
            10:00am<br/>
            Church Prayer Meeting (in person)<br/>
            -<br/>
            152 Withells Rd, Avonhead (Service Centre)
          </Typography>
          :
          <Typography variant="body1" sx={{textAlign: "center"}}>
          周二<br/>
          <br/>
          10:00am<br/>
          教会祷告会（实体）<br/>
          -<br/>
          152 Withells Rd, Avonhead (教会服务中心)
          </Typography>
        }
        <br/>
        {(language === LanguageEnum.ENGLISH) ?
          <Typography variant="body1" sx={{textAlign: "center"}}>
            7:30pm<br/>
            Bible Study (on Zoom)<br/>
            -<br/>
            Zoom: 534 361 6425, Password: 1234<br/><br/>
          </Typography>
          :
          <Typography variant="body1" sx={{textAlign: "center"}}>
            7:30pm<br/>
            圣经学习 (Zoom)<br/>
            -<br/>
            Zoom: 534 361 6425, 密码: 1234<br/><br/>
          </Typography>
        }
      </PageSection>
      <hr style={{width: "30%", marginTop: "1rem"}}/>
      <PageSection sx={{marginTop: "4rem"}}>
        {(language === LanguageEnum.ENGLISH) ?
          <Typography variant="body1" sx={{textAlign: "center"}}>
            Saturday<br/>
            <br/>
            5:00pm<br/>
            Youth Group (in person)<br/>
            -<br/>
            152 Withells Rd, Avonhead (Service Centre)
          </Typography>
          :
          <Typography variant="body1" sx={{textAlign: "center"}}>
            周六<br/>
            <br/>
            5:00pm<br/>
            学生团契（实体）<br/>
            -<br/>
            152 Withells Rd, Avonhead (教会服务中心)
          </Typography>
        }
        <br/>
        {(language === LanguageEnum.ENGLISH) ?
          <Typography variant="body1" sx={{textAlign: "center"}}>
            7:30pm<br/>
            Young Working Adults (in person and on Zoom)<br/>
            -<br/>
            Contact us for details<br/><br/>
          </Typography>
          :
          <Typography variant="body1" sx={{textAlign: "center"}}>
            7:30pm<br/>
            社青团契（实体和Zoom）<br/>
            -<br/>
            牧师馆<br/><br/>
          </Typography>
        }
      </PageSection>
      <hr style={{width: "30%", marginTop: "1rem"}}/>
    </Page>
  )
}