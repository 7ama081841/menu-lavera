import "./App.css";
import { Box, Button } from "@mui/material";
import MenuLavera from "./components/MenuLavera";
import Foutter from "./components/Foutter";
import { useEffect, useState } from "react";
import data from "./data";

function App() {
    const [category, setCategory] = useState("ALL");

    const handleButtonClick = (e) => {
        const buttonText = e.currentTarget.innerText;
        setCategory(buttonText);
    };

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
                <p>
                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                            backgroundColor:
                                category === "ALL" ? "#4dabf5" : "",
                            color: category === "ALL" ? "#fff" : "",
                        }}
                        onClick={handleButtonClick}
                    >
                        all
                    </Button>
                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                            backgroundColor:
                                category === "CHEESECAKE" ? "#4dabf5" : "",
                            color: category === "CHEESECAKE" ? "#fff" : "",
                        }}
                        onClick={handleButtonClick}
                    >
                        cheesecake
                    </Button>

                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                            backgroundColor:
                                category === "GAUFFRE" ? "#4dabf5" : "",
                            color: category === "GAUFFRE" ? "#fff" : "",
                        }}
                        onClick={handleButtonClick}
                    >
                        gauffre
                    </Button>

                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                            backgroundColor:
                                category === "PIZZA" ? "#4dabf5" : "",
                            color: category === "PIZZA" ? "#fff" : "",
                        }}
                        onClick={handleButtonClick}
                    >
                        pizza
                    </Button>

                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                            backgroundColor:
                                category === "COFFEE" ? "#4dabf5" : "",
                            color: category === "COFFEE" ? "#fff" : "",
                        }}
                        onClick={handleButtonClick}
                    >
                        Coffee
                    </Button>
                </p>
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
                <MenuLavera category={category} />
                <Foutter />
            </Box>
        </Box>
    );
}

export default App;
