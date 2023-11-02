import { Box } from "@mui/material";
import React from "react";
import data from "../data";

function Foutter() {
    return (
        <Box
            className="foutter"
            sx={{
                background: "#2e2c2d",
                color: "#fff",
                paddingBottom: "50px",
                width: {
                    lg: "100%",
                    md: "30%",
                },
                display: {
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "90%",
                    margin: "auto",
                    flexDirection: {
                        lg: "row",
                        md: "column",
                    },
                }}
            >
                <Box
                    sx={{
                        textAlign: "left",
                        width: {
                            lg: "30%",
                            md: "100%",
                        },
                        marginRight: "60px",
                    }}
                >
                    {data
                        ? (() => {
                              const items = [];
                              const dataLength =
                                  data.length < 4 ? data.length : 4;
                              for (let key = 0; key < dataLength; key++) {
                                  const item = data[key];
                                  items.push(
                                      <div key={key}>
                                          <h2 style={{ display: "flex" }}>
                                              {item.name}
                                              <span
                                                  style={{
                                                      marginLeft: "auto",
                                                      color: "#A78363",
                                                  }}
                                              >
                                                  {item.price} dt
                                              </span>
                                          </h2>
                                          <p>{item.description}</p>
                                      </div>
                                  );
                              }
                              return items;
                          })()
                        : null}
                </Box>
                <Box
                    sx={{
                        width: {
                            lg: "70%",
                            md: "100%",
                        },
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: "50px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            flexDirection: {
                                lg: "row",
                                md: "column",
                            },
                        }}
                    >
                        {data
                            ? (() => {
                                  const items = [];
                                  const dataLength =
                                      data.length < 8 ? data.length : 8;
                                  for (let key = 0; key < dataLength; key++) {
                                      const item = data[key];
                                      items.push(
                                          <Box
                                              key={key}
                                              sx={{
                                                  width: {
                                                      lg: "45%",
                                                      md: "100%",
                                                  },
                                              }}
                                          >
                                              <h2
                                                  style={{
                                                      width: "100%",
                                                      display: "flex",
                                                      borderBottom:
                                                          "2px solid #fff ",
                                                      paddingBottom: "10px",
                                                  }}
                                              >
                                                  {item.name}
                                                  <span
                                                      style={{
                                                          marginLeft: "auto",
                                                      }}
                                                  >
                                                      {item.price} dt
                                                  </span>
                                              </h2>
                                          </Box>
                                      );
                                  }
                                  return items;
                              })()
                            : null}
                    </Box>
                    <Box
                        sx={{
                            background: "#fff",
                            border: "2px solid #fff",
                            display: {
                                lg: "block",
                                md: "none",
                            },
                        }}
                    ></Box>

                    <p
                        style={{
                            textAlign: "center",
                            width: "80%",
                            margin: "auto",
                            marginTop: "30px",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus auctor metus non ante commodo, ut bibendum nulla
                        aliquet. Integer sit amet
                    </p>

                    <Box
                        sx={{
                            marginTop: "70px",
                            display: {
                                sm: "none",
                                xs: "none",
                                md: "none",
                                lg: "block",
                            },
                        }}
                    >
                        <h2
                            style={{
                                textTransform: "uppercase",
                                fontSize: "45px",
                            }}
                        >
                            reserver order
                        </h2>
                        <p
                            style={{
                                height: "0px",
                                border: "1px solid #fff ",
                                position: "relative",
                            }}
                        >
                            <span
                                style={{
                                    background: "#6e6357",
                                    borderRadius: "50px",
                                    position: "absolute",
                                    top: "-15px",
                                    width: "345px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    fontSize: "23px",
                                }}
                            >
                                disponible 08:00 - 19:00
                            </span>
                        </p>
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "71px",
                                margin: "0",
                            }}
                        >
                            58 129 031
                        </p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Foutter;
