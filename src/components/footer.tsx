import {AppBar, Box, Link, Toolbar, Typography} from "@mui/material";
import {Copyright, Facebook, PlaceOutlined} from "@mui/icons-material";

function Footer() {
  return (
    <AppBar position="relative" sx={{backgroundColor: "#6C6C6C"}}>
      <Toolbar>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "5rem 0"}}>
          <PlaceOutlined sx={{color: "white", fontSize: "2.5rem"}}/>
          <Typography variant="h6" sx={{color: "white", marginTop: "1rem", textAlign: "center"}}>
            150 Withells Road, Avonhead, Christchurch
          </Typography>
          <Link href="https://www.facebook.com/canterburychinesechristian.church/"
                target="_blank"
                rel="noopener noreferrer"
          >
            <Facebook sx={{color: "white", fontSize: "2.5rem", marginTop: "3rem"}}/>
          </Link>
          <hr style={{width: "50%", maxWidth: "400px"}}/>
          <Typography sx={{color: "white", fontSize: "0.8rem", textAlign: "center"}}>
            <Copyright sx={{transform: "translateY(15%)"}}/> 2023 Canterbury Chinese Christian Church
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;