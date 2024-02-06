import React, {useState} from 'react';
import './app.css';
import {createTheme, ThemeProvider} from "@mui/material";
import Navbar from "./components/navbar";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./home";
import Footer from "./components/footer";
import {About} from "./about";
import {Gallery} from "./gallery";
import {FindUs} from "./findUs";
import {Contact} from "./contact";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/about",
//     element: <About/>
//   },
//   {
//     path: "/gallery",
//     element: <Gallery/>
//   },
//   {
//     path: "/findus",
//     element: <FindUs/>
//   },
//   {
//     path: "/contact",
//     element: <Contact/>
//   },
//   {
//     path: "*",
//     loader: () => {
//       return redirect('/');
//     }
//   }
// ]);

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
        <BrowserRouter>
          <Navbar language={language} setLanguage={setLanguage}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/findus" element={<FindUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export default App;
