import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { FaLongArrowAltLeft } from "react-icons/fa";
import COLORS from "../../../../../public/constants/COLORS";
import { SizeOfSneaker } from "../../../../../utils/objects/sizeSneakers";
import { InfoSneakers } from "../../../../../utils/objects/InfoSneakers";

const ColorPickerComponent = ({ Id, SneakerColor = "" }) => {
  return (
    <>
      <Grid container sm={12} md={6} lg={6}>
        <div style={{}}>
          <button style={styles.ButtonDefault}>
            <div
              style={{
                height: 30,
                width: 30,
                backgroundColor: SneakerColor,
                borderRadius: 50,
              }}
            />
          </button>
        </div>
      </Grid>
    </>
  );
};

export default ColorPickerComponent;

const styles = {
  ButtonDefault: {
    borderWidth: 2,
    // backgroundColor: "transparent",
    border: "solid",
    borderColor: COLORS.CLEAR_GREY,
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  ChangeSneakerButtonClicked: {
    backgroundColor: COLORS.BLACK,
    borderWidth: 2,
    border: "solid",
    borderRadius: 10,
    width: 50,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  SizeTextDefault: { fontSize: 18, fontWeight: 500, color: COLORS.GREY },
  SizeTextClicked: { fontSize: 18, fontWeight: 500, color: COLORS.WHITE },
};
