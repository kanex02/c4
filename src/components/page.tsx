import {Box} from "@mui/material";

// @ts-ignore
export function Page({ children }) {
  return (
    <div style={{padding: "1rem 1rem 10rem", position: "relative", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Box sx={{maxWidth: "850px"}}>
        {children}
      </Box>
    </div>
  )
}