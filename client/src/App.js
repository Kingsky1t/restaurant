import { ThemeProvider, createTheme } from "@mui/material";
import { RestaurantContextProvider } from "./context/RestaurantContextProvider";
import { Menu } from "./components/Menu";
import { Error } from "./components/Error";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                light: "#25303e",
                main: "#141a18",
            },
            secondary: {
                main: "#485041",
                light: "#7a986f",
            },
        },
    });

    return (
        <RestaurantContextProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </ThemeProvider>
        </RestaurantContextProvider>
    );
}

export default App;
