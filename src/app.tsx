import React, {useState} from 'react';
import './app.css';
import {createTheme, ThemeProvider} from "@mui/material";
import Navbar from "./components/navbar";
import {createBrowserRouter, RouterProvider, redirect} from "react-router-dom";
import Home from "./home";
import Footer from "./components/footer";
import {About} from "./about";
import {Gallery} from "./gallery";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/gallery",
    element: <Gallery/>
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
    fontFamily: "Amiko",
    h5: {
      borderBottom: "1px lightgray solid"
    }
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
