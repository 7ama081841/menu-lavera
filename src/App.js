import "./App.css";
import { Box } from "@mui/material";
import MenuLavera from "./components/MenuLavera";
import Foutter from "./components/Foutter";

function App() {
    return (
        <Box className="App">
            <Box
                className="header"
                sx={{
                    background: "#2e2c2d",
                    color: "#fff",
                    height: {
                        xs: "250px",
                        sm: "250px",
                        md: "250px",
                        lg: "360px",
                    },
                }}
            >
                <span style={{ fontSize: "100px", textTransform: "uppercase" }}>
                    Logo
                </span>
                <Box
                    sx={{
                        height: "2px",
                        width: "37%",
                        background: "#fff",
                        margin: "auto",
                        marginTop: "20px",
                    }}
                ></Box>
                <p> Burger | Sandwsch | Pie | Coffee </p>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        lg: "column",
                        md: "row",
                    },
                }}
            >
                <MenuLavera />
                <Foutter />
            </Box>
        </Box>
    );
}

export default App;
