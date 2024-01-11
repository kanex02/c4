import React, {useState} from 'react';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import {createBrowserRouter, RouterProvider, redirect} from "react-router-dom";
import Home from "./Home";
import Footer from "./components/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "*",
    loader: () => {
      return redirect('/');
    }
  }
]);

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#ffffff',
    },
    secondary: {
      main: "#ffffff"
    }
  },
  typography: {
    fontFamily: "Amiko"
  }
});

export enum Language {
  ENGLISH,
  CHINESE
}

export const LanguageContext = React.createContext(Language.ENGLISH);

function App() {
  const [language, setLanguage] = useState(Language.ENGLISH);
  return (
    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={language}>
        <Navbar language={language} setLanguage={setLanguage}/>
        <RouterProvider router={router}/>
        <Footer/>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
