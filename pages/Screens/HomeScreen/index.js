import React, { useEffect, useState } from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaShoppingBag,
  FaSlidersH,
} from "react-icons/fa";
import { Grid, Typography } from "@mui/material";
import SneakerComponent from "./Components/3dSneakersComponent";
import TopBar from "./Components/TopBarComponent";
// import { HyperSneaker } from "./Components/3dSneakersComponent/HyperSneaker";
import COLORS from "../../../public/constants/COLORS";
import { useMobileListener } from "../../../utils/GetScreenSize";
import ChooseSizeButton from "./Components/ChooseSizeButton";
import { SizeOfSneaker } from "../../../utils/objects/sizeSneakers";
import ChangeButtonSneaker from "./Components/ChangeSneakerButtons";
import ColorPickerComponent from "./Components/ColorPicker";
import {
  InfoSneakers,
  SneakerColors,
} from "../../../utils/objects/InfoSneakers";

const Size = useMobileListener();

const HomeScreen = () => {
  const [SneakerId, setSneakerId] = useState(1);
  const [SneakerInfo, setSneakerInfo] = useState(
    InfoSneakers.find((f) => f.Id === SneakerId)
  );

  const validation = {
    vHeight: Size && Size.Height,
    vWidth: Size && Size.Width,
  };

  function changeBackground(e) {
    e.target.style.background = "red";
  }

  function HandleSneakerColors() {
    InfoSneakers.map((color) => {
      console.log(color);
    });
  }

  useEffect(() => {
    if (SneakerId) {
      setSneakerInfo(InfoSneakers.find((f) => f.Id === SneakerId));
    }
  }, [SneakerId]);

  function HandlePrimaryClick() {
    if (SneakerId <= 2) {
      setSneakerId((old) => old + 1);
    }
  }

  function HandleSecondaryClick() {
    if (SneakerId > 0) {
      setSneakerId((old) => old - 1);
    }
  }

  return (
    <Grid
      container
      sm={12}
      md={12}
      lg={12}
      style={{
        backgroundColor: "#f6f6f6",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        direction={"row"}
        columns={2}
        sm={12}
        md={6}
        lg={6}
        style={{
          backgroundColor: "#f6f6f6",
          borderRadius: 50,
          margin: 40,
          background: "linear-gradient(-290deg, #F6F6F6,#e7e7e7 )",
          boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
          padding: "2% 1% 0% 1%",
        }}
      >
        <Grid
          container
          sm={12}
          md={6}
          lg={6}
          style={
            {
              // padding: "3% 3% 0% 3%",
            }
          }
        >
          <div
            style={{
              //   height: "85%",
              padding: "10px 35px 50px 35px",
              width: "100%",
              // borderRadius: "5% 0% 0% 5%",
            }}
          >
            <Grid
              container
              sm={12}
              md={6}
              lg={6}
              style={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TopBar />
            </Grid>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: validation.vWidth > 480 ? "55%" : "100%",
                }}
              >
                <input
                  placeholder="Search for your sneaker"
                  type="text"
                  style={{
                    border: "none",
                    borderRadius: "20px 0px 0px 20px",
                    lineHeight: 0,
                    fontSize: 18,
                    fontWeight: "600",
                    paddingLeft: "10%",
                    width: "100%",
                    height: "55px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  height: "60px",
                  width: "60px",
                  borderRadius: "15px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "-1%",
                  background: COLORS.BLACK,
                }}
              >
                <FaSlidersH
                  size={22}
                  color={COLORS.WHITE_SMOKE}
                  style={{
                    alignSelf: "center",
                    justifySelf: "center",
                  }}
                />
              </div>
            </div>

            <Grid
              container
              sm={12}
              md={12}
              lg={12}
              style={{ height: 220, width: "100%" }}
            >
              <Grid
                container
                sm={12}
                md={12}
                lg={12}
                style={{
                  position: "relative",
                }}
              >
                <h1
                  //   variant={"h1"}
                  //   sm={12}
                  //   md={6}
                  //   lg={6}
                  style={{
                    fontWeight: 600,
                    // fontSize: `${1 + "2vh"}`,
                    lineHeight: 1.1,
                  }}
                >
                  Comfort & <br /> Magic Awaits. Everyday.
                </h1>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    //   width: "100%",
                    gap: 10,
                    // backgroundColor: "blue",
                    position: "absolute",
                    right: 4,
                    bottom: 10,
                  }}
                >
                  <ChangeButtonSneaker
                    onPrimaryClick={HandleSecondaryClick}
                    onSecondaryClick={HandlePrimaryClick}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              sm={12}
              md={6}
              lg={6}
              style={{
                // margin: "5% 0%",
                padding: "9% 0px 10px 0px",
              }}
            >
              <Typography
                variant={"h7"}
                style={{ fontSize: 36, fontWeight: 600 }}
              >
                $179.00
              </Typography>
            </Grid>

            <Grid container sm={12} columns={1} md={6} lg={6} style={{}}>
              <>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      marginLeft: 2,
                    }}
                  >
                    <Typography
                      variant="h7"
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                      }}
                    >
                      Size
                    </Typography>
                  </div>

                  <Grid
                    container
                    columns={2}
                    sm={12}
                    md={12}
                    lg={12}
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 0px 10px 0px",
                    }}
                  >
                    <Grid container sm={12} md={6} lg={6} style={{}}>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <ChooseSizeButton />
                      </div>
                    </Grid>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        justifyItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <button type="submit" style={styles.AddToCartButton}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <div style={{ height: "100%" }}>
                              <p style={{ fontWeight: 600, fontSize: 18 }}>
                                Add To Cart
                              </p>
                            </div>

                            <div style={{ height: "100%" }}>
                              <FaShoppingBag size={18} color={COLORS.WHITE} />
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </Grid>
                </div>
              </>
            </Grid>
          </div>
        </Grid>

        <Grid
          container
          sm={12}
          md={6}
          lg={6}
          style={{
            // padding: "3% 3% 0% 0%",
            // background: "blue",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "95%",
              width: "100%",
              borderRadius: "50px 50px 50px 50px",
              // alignItems: "center",
              // justifyItems: "center",
              background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
              boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "60%",
                width: "50%",
                borderRadius: "50%",
                alignSelf: "center",
                background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
                boxShadow: "35px 35px 70px #bebebe, -35px -35px 70px #ffffff",
                position: "absolute",
                // zIndex: 1,
                top: "16%",
                left: "28%",
              }}
            />
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                top: "18%",
                // background: "blue",
                left: "19%",
                height: "70%",
                width: "60%",
              }}
            >
              <SneakerComponent Loader={SneakerInfo.Sneaker3D} />
            </div>

            <Grid container sm={12} md={6} lg={6} style={{}}>
              <div
                style={{
                  position: "absolute",
                  zIndex: 1,
                  bottom: "5%",
                  left: "19%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  {SneakerInfo?.Colors.map((item) => (
                    <ColorPickerComponent Id={1} SneakerColor={item.Color} />
                  ))}
                </div>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HomeScreen;

const styles = {
  SneakerConatiner: {
    alignItems: "center",
    height: "500px",
    width: "500px",
  },
  HomeContainer: {
    height: "670px",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  ChangeSneakerButton: {
    backgroundColor: "transparent",
    borderWidth: "1px",
    borderRadius: 20,
    width: 70,
    height: 43,
  },
  AddToCartButton: {
    backgroundColor: COLORS.BLACK,
    borderWidth: "1px",
    borderRadius: 25,
    width: 200,
    height: 48,
    color: COLORS.WHITE,
    lineHeight: 0,
  },
};
