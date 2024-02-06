import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";
import {Page} from "./components/page";
import {PageSection} from "./components/pageSection";
import {Language as LanguageEnum, LanguageContext} from "./app";

export function About() {
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
            {language === LanguageEnum.ENGLISH ? "About Us" : "关于我们"}
          </Typography>
          <img src={require("./static/images/church_photo.png")}
               style={{width: "100%", height: "auto", flexShrink: 0}}
               alt=""/>
        </div>
      </Box>
      <br/><br/>
      <Box>
        <Typography variant="body1">
          Since Canterbury Chinese Christian Church's establishment on March 31, 1996, the brothers and sisters who
          are
          willing to serve in the church have never ceased. They have gone from having nothing to having everything.
          Afterwards, branch churches were established in the Lincoln and Rolleston areas. Starting from February
          2013,
          the church expanded its boundaries to the northeast of mainland China, and all of this is due to the
          wonderful
          work and grace of God.
          <br/><br/>
          Whenever difficulties or bottlenecks are encountered in serving, as long as we look back at God's promises
          and
          guidance, our spirits are once again encouraged. We give thanks and praise to the Lord!
          <br/><br/>
          The year 2020 was a deeply impactful year. Although the world underwent drastic changes due to the COVID-19
          pandemic, for those of us living here, apart from the restrictions on traveling and visiting family members
          as
          freely as before, everything else remained relatively normal. However, as we witnessed the development of
          the
          global situation, gradually confirming what the Bible says, we deeply feel that the days are no longer as
          they
          used to be, and time is running out.
          <br/><br/>
          As a church pastor, it is necessary to strongly remind everyone to prepare more and deeper in their
          spiritual
          lives and hearts to meet the Lord. "But you, dear friends, by building yourselves up in your most holy faith
          and praying in the Holy Spirit, keep yourselves in God's love as you wait for the mercy of our Lord Jesus
          Christ to bring you to eternal life" (Jude 1:20-21). We must learn in the truth and hide God's word in our
          hearts for constant help. We must be watchful in prayer, reflect, repent, and wait for the second coming of
          the Lord Jesus, because "The world and its desires pass away, but whoever does the will of God lives
          forever"
          (1 John 2:17).
          <br/><br/>
          May the grace of our Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with us
          always, now and forever. Amen!
        </Typography>
      </Box>
      <PageSection>
        <Typography variant="h5">
          Our Goal
        </Typography>
        <br/>
        <Typography variant="h6" sx={{
          fontSize: "2rem",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "darkgray",
          textAlign: "center"
        }}>
          "Establishing a church in accordance with the will of God."
        </Typography>
        <br/>
        <Box sx={{display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center"}}>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/healing.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              Holistic Healing
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/training.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              Disciple Training
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/ministering.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              Every Member Ministering
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/evangelism.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              Evangelism
            </Typography>
          </Box>
        </Box>
      </PageSection>
      <PageSection>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h5">
            Departments
          </Typography>
          <br/><br/>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            The church currently has the following seven major functional departments, under the leadership of our Lord
            Jesus Christ, working together in unity to fulfill the overall goals of the church.
            <br/><br/>
            Worship Department
            <br/><br/>
            Food Services Department
            <br/><br/>
            Care Department
            <br/><br/>
            Fellowship Department
            <br/><br/>
            Administration Department
            <br/><br/>
            Missions Department
            <br/><br/>
            Finance Department
          </Typography>
        </Box>
      </PageSection>
      <hr style={{marginTop: "6rem"}}/>
      <PageSection>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h5">
            Fellowship Groups
          </Typography>
          <br/><br/>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            Han Kan Group
            <br/><br/>
            Neng Xing Group
            <br/><br/>
            Jie Cai Zhong Group
            <br/><br/>
            Zhang Wei Group
            <br/><br/>
            Wang Chun Group
            <br/><br/>
            4C Group
            <br/><br/>
            Social Youth Fellowship
            <br/><br/>
            Xin Zhi Group
            <br/><br/>
            Student Fellowship
            <br/><br/>
            Children's Sunday School
          </Typography>
        </Box>
      </PageSection>
    </Page>
  )
}