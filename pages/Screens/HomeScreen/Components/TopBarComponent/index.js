import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Button, Grid } from "@mui/material";
import COLORS from "../../../../../public/constants/COLORS";
import { useMobileListener } from "../../../../../utils/GetScreenSize";
import { NavBarCategories } from "../../../../../utils/objects/NavBarCategories";

const Size = useMobileListener();

// const {
//   TabTopBarContainer,
//   ImageContainer,
//   ImageLogo,
//   NavItemsContainer,
//   ManCategoriesTextStyle,
//   WomenCategoriesTextStyle,
//   KidsCategoriesTextStyle,
//   CustomizeCategoriesTextStyle,
// } = styleCss;

const TopBar = () => {
  const [ButtonOneColor, setButtonOneColor] = useState(COLORS.GREY);
  const [ButtonTwoColor, setButtonTwoColor] = useState(COLORS.GREY);
  const [ButtonThreeColor, setButtonThreeColor] = useState(COLORS.GREY);
  const [ButtonFourColor, setButtonFourColor] = useState(COLORS.GREY);

  const [ButtonId, setButtonId] = useState(undefined);

  const [SelectedCategory, setSelectedCategory] = useState(0);

  function RestartState() {
    setButtonOneColor(COLORS.GREY);
    setButtonTwoColor(COLORS.GREY);
    setButtonThreeColor(COLORS.GREY);
    setButtonFourColor(COLORS.GREY);
  }

  function ChangeState(id) {
    const IdBtn = ButtonId;
    console.log({ IdBtn });
    console.log({ id });

    if (id) {
      //   RestartState();

      if (id === "1") {
        if (ButtonOneColor === COLORS.GREY) {
          setButtonOneColor(COLORS.BLACK);
        } else setButtonOneColor(COLORS.GREY);
      }
      if (id === "2") {
        if (ButtonTwoColor === COLORS.GREY) {
          setButtonTwoColor(COLORS.BLACK);
        } else setButtonTwoColor(COLORS.GREY);
      }
      if (id === "3") {
        if (ButtonThreeColor === COLORS.GREY) {
          setButtonThreeColor(COLORS.BLACK);
        } else setButtonThreeColor(COLORS.GREY);
      }
      if (id === "4") {
        if (ButtonFourColor === COLORS.GREY) {
          setButtonFourColor(COLORS.BLACK);
        } else setButtonFourColor(COLORS.GREY);
      }
    }
  }

  const RowList = () => {
    if (Size && Size.Width > 480) {
      return NavBarCategories.map((item) => (
        <div style={styles.NavItemsContainer}>
          <button
            style={
              SelectedCategory === item.Id
                ? styles.ButtonStyleCliked
                : styles.ButtonStyleDefault
            }
            key={item.Id}
            buttonColor={ButtonOneColor}
            onClick={() =>
              setSelectedCategory(SelectedCategory === item.Id ? 0 : item.Id)
            }
          >
            {item.Title}
          </button>
        </div>
      ));
    } else {
      return (
        <button
          style={{
            alignSelf: "center",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          <FaBars size={25} />
        </button>
      );
    }
  };

  return (
    <>
      <Grid container sm={12} md={6} lg={6}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // paddingLeft: 10,
          }}
        >
          <div style={{ marginRight: 40 }}>
            <img
              style={{ height: 80, width: 80 }}
              src="/images/svgs/SneakersShoreLogo.svg"
              alt="Clea nWorld"
            />
          </div>
          {RowList()}
        </div>
      </Grid>
    </>
  );
};

export default TopBar;

const styles = {
  ButtonStyleDefault: {
    // padding: "10px",
    gap: 5,
    fontSize: "20px",
    fontWeight: 600,
    color: COLORS.GREY,
    backgroundColor: "transparent",
    border: "none",
  },
  ButtonStyleCliked: {
    // padding: "10px",
    gap: 5,
    fontSize: "20px",
    fontWeight: 600,
    color: COLORS.BLACK,
    backgroundColor: "transparent",
    border: "none",
  },
  NavItemsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingInline: 10,
    alignItems: "center",
  },
};
