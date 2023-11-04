import "./App.css";
import { Box, Button } from "@mui/material";
import MenuLavera from "./components/MenuLavera";
import Foutter from "./components/Foutter";
import { useState } from "react";

function App() {
    const [category, setCategory] = useState("all");

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
                        }}
                        onClick={() => setCategory("all")}
                    >
                        {" "}
                        all{" "}
                    </Button>
                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                        }}
                        onClick={() => setCategory("cheesecake")}
                    >
                        cheesecake
                    </Button>

                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                        }}
                        onClick={() => setCategory("gauffre")}
                    >
                        gauffre
                    </Button>

                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                        }}
                        onClick={() => setCategory("pizza")}
                    >
                        {" "}
                        pizza{" "}
                    </Button>

                    <Button
                        sx={{
                            ":hover": {
                                background: "#4dabf5",
                                color: "#fff",
                            },
                        }}
                        onClick={() => setCategory("coffee")}
                    >
                        {" "}
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
