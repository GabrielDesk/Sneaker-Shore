import React from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaShoppingBag,
  FaSlidersH,
} from "react-icons/fa";
import { Grid, Typography } from "@mui/material";
import SneakerComponent from "./Components/3dSneakersComponent";
import TopBar from "./Components/TopBarComponent";
import { HyperSneaker } from "./Components/3dSneakersComponent/HyperSneaker";
import COLORS from "../../../public/constants/COLORS";
import { useMobileListener } from "../../../utils/GetScreenSize";
import ChooseSizeButton from "./Components/ChooseSizeButton";
import { SizeOfSneaker } from "../../../utils/objects/sizeSneakers";
import ChangeButtoSneaker from "./Components/ChangeSneakerButtons";

const Size = useMobileListener();

function HomeScreen() {
  const validation = {
    vHeight: Size && Size.Height,
    vWidth: Size && Size.Width,
  };

  function changeBackground(e) {
    e.target.style.background = "red";
  }

  return (
    <Grid
      container
      direction={"row"}
      columns={2}
      sm={12}
      md={12}
      lg={12}
      style={{
        backgroundColor: "#f6f6f6",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid
        container
        sm={12}
        md={6}
        lg={6}
        style={{
          padding: "3% 3% 0% 3%",
        }}
      >
        <div
          style={{
            height: "85%",
            padding: "5%",
            width: "100%",
            borderRadius: "5% 0% 0% 5%",

            boxShadow: `5px 10px 10px #e7e7e7`,
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

          <Grid container columns={2} sm={12} md={12} lg={12} style={{}}>
            <Grid container sm={12} md={8} lg={8} style={{ paddingTop: 10 }}>
              <Typography
                variant={"h2"}
                sm={4}
                md={4}
                lg={4}
                style={{ fontWeight: 600 }}
              >
                Comfort & <br /> Magic Awaits Everyday.
              </Typography>
            </Grid>

            <Grid container sm={12} md={3.64} lg={3.64} style={{}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  width: "100%",
                  justifyContent: "end",
                  gap: 10,
                }}
              >
                <ChangeButtoSneaker />
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            sm={12}
            md={6}
            lg={6}
            style={{
              margin: "5% 0%",
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
                    justifyContent: "space-between",
                  }}
                >
                  <Grid container sm={12} md={6} lg={6} style={{}}>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginTop: 15,
                      }}
                    >
                      <ChooseSizeButton />
                    </div>
                  </Grid>

                  <Grid container sm={12} md={3.64} lg={3.64} style={{}}>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "end",
                        justifyItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          marginTop: 15,
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
          padding: "3% 3% 0% 0%",
        }}
      >
        <div
          style={{
            height: "95%",
            width: "100%",
            borderRadius: "0% 5% 5% 0%",
            alignContent: "center",
            background: "linear-gradient(-290deg, #F6F6F6,#e7e7e7 )",

            justifyContent: "center",
            boxShadow: ` 5px 10px 10px #e7e7e7`,
          }}
        >
          <SneakerComponent />
        </div>
      </Grid>
    </Grid>
  );
}
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
