import { Box, Typography } from "@mui/material";
import React from "react";
import data from "../data";

function MenuLavera() {
    return (
        <Box
            className="cards"
            sx={{
                width: {
                    lg: "90%",
                    md: "70%",
                },
                marginTop: {
                    lg: "-89px",
                    md: "20px",
                    sm: "20px",
                    xs: "20px",
                },
                flexDirection: {
                    lg: "row",
                    md: "column",
                },
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: "20px",
                flexWrap: "wrap",
                marginBottom: "50pxs",
                margin: "auto",
                padding: "0 10px",
            }}
        >
            {data
                ? data.map((items, key) => (
                      <Box
                          key={key}
                          className="card"
                          sx={{
                              width: {
                                  lg: "250px",
                                  md: "100%",
                                  sm: "100%",
                                  xs: "100%",
                              },
                              display: {
                                  lg: "block",
                                  md: "flex",
                                  sm: "flex",
                                  xs: "block",
                              },
                              textAlign: {
                                  lg: "center",
                                  md: "left",
                              },
                              flexDirection: "row-reverse",
                              pading: "0 20px",
                              marginBottom: "20px",
                          }}
                      >
                          <div className="image">
                              <img
                                  style={{
                                      borderRadius: "100%",
                                      width: "194px",
                                      height: "175px",
                                      padding: "10px",
                                      background: "#706964",
                                  }}
                                  src={items.image}
                                  alt="image"
                              />
                          </div>
                          <div className="info">
                              <h2
                                  style={{
                                      fontWeight: "bold",
                                      textTransform: "capitalize",
                                      fontSize: "40px",
                                      margin: "0px",
                                  }}
                              >
                                  {items.name}
                              </h2>

                              <Typography component="p">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Vivamus auctor metus non ante
                                  commodo, ut bibendum nulla aliquet. Integer
                                  sit amet condimentum odio. Maecenas posuere
                                  euismod quam, sit amet elementum elit euismod
                                  eu. In non tincidunt ipsum.
                              </Typography>

                              <Box
                                  sx={{
                                      height: "2px",
                                      width: {
                                          lg: "155px",
                                          md: "125%",
                                      },
                                      background: "black",
                                      margin: "auto",
                                      marginTop: {
                                          lg: "20px",
                                          md: "0px",
                                      },
                                  }}
                              ></Box>
                              <Box
                                  sx={{
                                      marginTop: {
                                          lg: "10px",
                                          md: "0px",
                                      },
                                      fontSize: "30px",
                                      fontWeight: "bold",
                                  }}
                              >
                                  {items.price} dt
                              </Box>
                          </div>
                      </Box>
                  ))
                : null}
            <Box
                sx={{
                    // marginTop: "70px",
                    width: "100%",
                    display: {
                        lg: "none",
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
                        border: "1px solid black ",
                        position: "relative",
                        width: "80%",
                        margin: "auto",
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
                            color: "#fff",
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
                    58 129 031{" "}
                </p>
            </Box>
        </Box>
    );
}

export default MenuLavera;
