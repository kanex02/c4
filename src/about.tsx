import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";
import {Page} from "./components/page";
import {PageSection} from "./components/pageSection";
import {Language as LanguageEnum, LanguageContext} from "./app";
import {
  MusicNoteOutlined,
  FastfoodOutlined, PeopleOutlined, ContentPaste, CampaignOutlined, AccountBalanceOutlined, FavoriteBorder
} from "@mui/icons-material";

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
          <Typography variant="h4" sx={{position: "absolute", top: "40%", color: "white", backdropFilter: "blur(2px)", backgroundColor: "rgba(0, 0, 0, 0.4)", padding: "1rem 2.5rem 0.5rem"}}>
            {language === LanguageEnum.ENGLISH ? "About Us" : "关于教会"}
          </Typography>
          <img src={require("./static/images/church_photo.png")}
               style={{width: "100%", height: "auto", flexShrink: 0}}
               alt=""/>
        </div>
      </Box>
      <br/><br/>
      <Box>
        {(language === LanguageEnum.ENGLISH) ?
          <Typography variant="body1">
            Since Canterbury Chinese Christian Church's establishment on March 31, 1996, we have always had brothers
            and sisters who are willing to serve. We have gone from having nothing to having everything we could hope for.
            Afterwards, branch churches were established in the Lincoln and Rolleston areas. Starting from February
            2013, the church also contributed to ministries in the northeast of mainland China, and all of this is
            due to God's wonderful work and grace.
            <br/><br/>
            Whenever difficulties or bottlenecks are encountered in serving, as long as we look back at God's promises
            and guidance, our spirits are once again encouraged. We give thanks and praise to the Lord!
            <br/><br/>
            The year 2020 was a deeply impactful year. Although the world underwent drastic changes due to the COVID-19
            pandemic, for those of us living here, apart from the restrictions on traveling and visiting family members,
            everything else remained relatively normal. However, as we witnessed the pandemic unfold, confirming what
            the Bible says, we deeply feel that time is running out.
            <br/><br/>
            As a church pastor, it is necessary to strongly remind everyone to prepare their spiritual lives and hearts
            to meet the Lord. "But you, dear friends, by building yourselves up in your most holy faith
            and praying in the Holy Spirit, keep yourselves in God's love as you wait for the mercy of our Lord Jesus
            Christ to bring you to eternal life" (Jude 1:20-21). We must learn in the truth and hide God's word in our
            hearts for constant help. We must be watchful in prayer, reflecting, repenting, and ready for the second
            coming of the Lord Jesus, because "The world and its desires pass away, but whoever does the will of God
            lives forever" (1 John 2:17).
            <br/><br/>
            May the grace of our Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with us
            always, now and forever. Amen!
          </Typography>

            :

          <Typography variant="body1">
            從教會於1996年3月31日成立至今，期間樂意事奉的弟兄姊妹從未間斷，從一無所有到樣
            樣都有。之後又在林肯及Rolleston這二地區成立了分堂。 2013年二月開始，更是擴張教
            會的境界至大陸的东北，全都是祂奇妙的作為及恩典。
            <br/><br/>
            每當在事奉中遇到難處、瓶頸之時，只要回顧上帝的應許及帶領，心靈就再度被激勵，感
            謝讚美主!
            <br/><br/>
            2020年是讓人感受深刻的一年，雖全球因新冠劇烈變動，然而對住在這裡的我們來說，
            除了無法像往年一樣，返乡探亲自由走动的人外，其餘大致如常。然而眼看世界的局勢發
            展，逐步印證聖經所言，深覺日子已經不若從前，真的時候不多了。
            <br/><br/>
            身為教會牧者，實在有必要再次強烈提醒眾人，要在屬靈生命及心靈上更多、更深預備
            迎見主的面。「猶大書20~21親愛的弟兄啊，你們卻要在至聖的真道上造就自己，在聖靈
            裏禱告。保守自己常在 神的愛中，仰望我們主耶穌基督的憐憫，直到永生。」務要在真
            道上學習，將上帝的話藏在心裡做隨時的幫助；要儆醒禱告，反省、悔改，等候主耶穌的
            再來，因為「約一2:17 這世界和其上的情慾都要過去，惟獨遵行 神旨意的，是永遠常存
            。」
            <br/><br/>
            願我主耶穌基督的恩惠，上帝的慈愛，聖靈的感動，常與我們同在，直到永永遠遠，阿
            們!
          </Typography>
        }
      </Box>
      <PageSection>
        <Typography variant="h5">
          {(language === LanguageEnum.ENGLISH) ? "Our Goal" : "教会总目标"}
        </Typography>
        <br/>
        <Typography variant="h6" sx={{
          fontSize: "2rem",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "darkgray",
          textAlign: "center"
        }}>
          {(language === LanguageEnum.ENGLISH) ? "\"Establishing a church in accordance with the will of God.\"" : "建立合神心意的教会"}
        </Typography>
        <br/>
        <Box sx={{display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center"}}>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/healing.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              {(language === LanguageEnum.ENGLISH) ? "Holistic Healing" : "全人医治"}
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/training.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              {(language === LanguageEnum.ENGLISH) ? "Disciple Training" : "门徒训练"}
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/ministering.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              {(language === LanguageEnum.ENGLISH) ? "Every Member Ministering" : "人人事奉"}
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={require("./static/images/evangelism.png")} style={{height: "140px"}} alt=""/>
            <br/>
            <Typography variant="body1">
              {(language === LanguageEnum.ENGLISH) ? "Evangelism" : "传扬福音"}
            </Typography>
          </Box>
        </Box>
      </PageSection>
      <PageSection>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h5">
            {(language === LanguageEnum.ENGLISH) ? "Departments" : "教会职能部门"}
          </Typography>
          <br/><br/>
          <Typography variant="body1" sx={{textAlign: "center"}}>
            {(language === LanguageEnum.ENGLISH) ?
              "The church currently has the following seven major functional " +
              "departments, under the leadership of our Lord Jesus Christ, working together in unity to fulfill the " +
              "overall goals of the church."
              :
              "教会现在有以下7大职能部门，在元首耶稣基督的带领下，各部门同心合一，实践教会的总目标。"
            }
          </Typography>
          <br/>
          <Typography variant="h6" sx={{textAlign: "center", ...(language !== LanguageEnum.ENGLISH && {fontFamily: "Noto Serif SC"})}}>
            <Box sx={{display: 'flex', flexWrap: "wrap", justifyContent: "center", rowGap: "2rem"}}>
              <Box sx={{width: (language === LanguageEnum.ENGLISH ? "150px" : "100px")}}>
                <MusicNoteOutlined/><br/>
                {(language === LanguageEnum.ENGLISH) ? "Worship Department" : "敬拜部"}
              </Box>
             <Box sx={{width: (language === LanguageEnum.ENGLISH ? "150px" : "100px")}}>
              <FastfoodOutlined/><br/>
              {(language === LanguageEnum.ENGLISH) ? "Food Services Department" : "膳食部 "}
              </Box>
             <Box sx={{width: (language === LanguageEnum.ENGLISH ? "150px" : "100px")}}>
              <FavoriteBorder/><br/>
              {(language === LanguageEnum.ENGLISH) ? "Care Department" : "關懷部"}
              </Box>
             <Box sx={{width: (language === LanguageEnum.ENGLISH ? "150px" : "100px")}}>
              <PeopleOutlined/><br/>
              {(language === LanguageEnum.ENGLISH) ? "Fellowship Department" : "團契部"}
              </Box>
             <Box sx={{width: (language === LanguageEnum.ENGLISH ? "150px" : "100px")}}>
              <ContentPaste/><br/>
              {(language === LanguageEnum.ENGLISH) ? "Administration Department" : "總務部"}
              </Box>
             <Box sx={{width: (language === LanguageEnum.ENGLISH ? "150px" : "100px")}}>
              <CampaignOutlined/><br/>
              {(language === LanguageEnum.ENGLISH) ? "Missions Department" : "宣教部"}
              </Box>
             <Box sx={{width: (language === LanguageEnum.ENGLISH ? "150px" : "100px")}}>
              <AccountBalanceOutlined/><br/>
              {(language === LanguageEnum.ENGLISH) ? "Finance Department" : "財務部"}
              </Box>
            </Box>
          </Typography>
        </Box>
      </PageSection>
      <hr style={{marginTop: "4rem"}}/>
      <PageSection>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h5">
            {(language === LanguageEnum.ENGLISH) ? "Fellowship Groups" : "团契小组"}
          </Typography>
          <br/><br/>
          <Typography variant="h6" sx={{textAlign: "center", ...(language !== LanguageEnum.ENGLISH && {fontFamily: "Noto Serif SC"})}}>
            {(language === LanguageEnum.ENGLISH) ? "Han Kan Group" : "汉堪小组"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Neng Xing Group" : "能兴小组"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Jie Cai Zhong Group" : "芥菜種小組"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Zhang Wei Group" : "张玮小组"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Wang Chun Group" : "汪淳小组"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "4C Group" : "4C組"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Social Youth Fellowship" : "社會青年團契"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Xin Zhi Group" : "新枝小组"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Student Fellowship" : "学生团契"}
            <br/><br/>
            {(language === LanguageEnum.ENGLISH) ? "Children's Sunday School" : "儿童主日学"}
          </Typography>
        </Box>
      </PageSection>
    </Page>
  )
}