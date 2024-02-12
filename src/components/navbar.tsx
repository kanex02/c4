import React from 'react';
import '../app.css';
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Grow, Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography
} from "@mui/material";
import {ArrowDropDown, Language, Menu as MenuIcon} from "@mui/icons-material";
import {Language as LanguageEnum} from "../app";
import {Link} from "react-router-dom";

interface NavbarProps {
  language: LanguageEnum,
  setLanguage: React.Dispatch<React.SetStateAction<LanguageEnum>>
}

function Navbar(props: NavbarProps) {
  const {language, setLanguage} = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ height: "9rem", justifyContent: "start", padding: {sm: "2rem", xs: "2rem 0.5rem"} }}>
      <Toolbar sx={{gap: "0.7rem"}}>
        <Box sx={{display: {xs:"flex", md: "none"}, flexGrow: 0, flexDirection: "row", padding: 0, minWidth: 0}}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{color: "black"}}
          >
            <MenuIcon/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link style={{color: "black"}} to="/">
                <Button color="inherit" sx={{fontFamily: "Amiko"}}>
                  {language === LanguageEnum.ENGLISH ? "HOME" : "主页"}
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link style={{color: "black", textDecoration: "none"}} to="/about">
                <Button color="inherit" sx={{fontFamily: "Amiko"}}>
                  {language === LanguageEnum.ENGLISH ? "About Us" : "关于教会"}
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link style={{color: "black", textDecoration: "none"}} to="/gallery">
                <Button color="inherit" sx={{fontFamily: "Amiko"}}>
                  {language === LanguageEnum.ENGLISH ? "Gallery" : "相册"}
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link style={{color: "black"}} to="/findus">
                <Button color="inherit" sx={{fontFamily: "Amiko"}}>
                  {language === LanguageEnum.ENGLISH ? "FIND US" : "地址"}
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link style={{color: "black"}} to="/contact">
                <Button color="inherit" sx={{fontFamily: "Amiko"}}>
                  {language === LanguageEnum.ENGLISH ? "CONTACT US" : "联络"}
                </Button>
              </Link>
            </MenuItem>
          </Menu>
        </Box>


        <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
          <Box sx={{
            height: "100%", display: 'flex', flexDirection: "row", flexGrow: 1, alignItems: "end",
            cursor: "pointer"
          }}>
            <Box sx={{display: {xs: "none", sm: "block"}}}>
              <img src={require("../static/images/img.png")} alt="" style={{height: "10ch"}}/>
            </Box>
            <Box>
              <Typography component="div" sx={{
                maxWidth: "16ch",
                textAlign: "left",
                fontFamily: "Rubik",
                fontSize: "1.2rem",
                lineHeight: "1.4rem"
              }}>
                {language === LanguageEnum.ENGLISH ? "Canterbury Chinese" : "坎特伯利"}
              </Typography>
              <Typography component="div" sx={{
                maxWidth: "16ch",
                textAlign: "left",
                fontFamily: "Rubik",
                fontSize: "1.2rem",
                lineHeight: "1.4rem"
              }}>
                {language === LanguageEnum.ENGLISH ? "Christian Church" : "华语基督教会"}
              </Typography>
            </Box>
          </Box>
        </Link>



        <Box sx={{display: {xs:"none", sm: "none", md: "flex"}, flexGrow: 1, flexDirection: "row-reverse"}}>
          <Link style={{color: "black"}} to="/contact">
            <Button color="inherit"
                    sx={{fontFamily: "Amiko"}}>{language === LanguageEnum.ENGLISH ? "CONTACT US" : "联络"}</Button>
          </Link>
          <Link style={{color: "black"}} to="/findus">
            <Button color="inherit"
                    sx={{fontFamily: "Amiko"}}>{language === LanguageEnum.ENGLISH ? "FIND US" : "地址"}</Button>
          </Link>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{color: "black"}}
          >
            {language === LanguageEnum.ENGLISH ? "ABOUT" : "关于"} <ArrowDropDown sx={{transform: "translateY(-10%)"}}/>
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({TransitionProps, placement}) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link style={{color: "black", textDecoration: "none"}} to="/about">
                          {language === LanguageEnum.ENGLISH ? "About Us" : "关于教会"}
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link style={{color: "black", textDecoration: "none"}} to="/gallery">
                          {language === LanguageEnum.ENGLISH ? "Gallery" : "相册"}
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Link style={{color: "black"}} to="/">
            <Button color="inherit"
                    sx={{fontFamily: "Amiko"}}>{language === LanguageEnum.ENGLISH ? "HOME" : "主页"}</Button>
          </Link>
        </Box>
        <Button
          color="inherit"
          sx={{backgroundColor: "#B7EAAF", margin: "2ch", paddingX: "3ch", minWidth: "12ch"}}
          onClick={() => setLanguage(language === LanguageEnum.ENGLISH? LanguageEnum.CHINESE : LanguageEnum.ENGLISH)}
        >
          <Language style={{height: "1rem", width: "1rem"}}/>
          <Typography variant="body1" sx={{transform: "translateY(10%)", textTransform: "none"}}>
            {language === LanguageEnum.ENGLISH ? "English" : "中文" }
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
