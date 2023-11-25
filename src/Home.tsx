import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, Box, Button, IconButton, Switch, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Home() {
  return (
    <div className="App">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  );
}

export default Home;
