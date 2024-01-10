import {Card, styled} from "@mui/material";

const InfoCard = styled(Card)(() => ({
  display: "flex", alignItems: "center", position: "relative", gap: "3rem",
  flexDirection: "column", width: "fit-content", padding: "2rem",
  borderRadius: "15px",
  boxShadow: "0px 2px 14px -1px rgba(0,0,0,0.1), 0px 1px 1px 0px rgba(0,0,0,0.07), 0px 1px 3px 0px rgba(0,0,0,0.06)",

  '&:hover': {
    boxShadow: "0px 2px 14px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.28), 0px 1px 3px 0px rgba(0,0,0,0.24)",
  }
}));

export default InfoCard;