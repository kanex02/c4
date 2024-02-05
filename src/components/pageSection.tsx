import {Box} from "@mui/material";

// @ts-ignore
export function PageSection({ children, sx={} }) {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "6rem", ...sx}}>
      {children}
    </Box>
  )
}