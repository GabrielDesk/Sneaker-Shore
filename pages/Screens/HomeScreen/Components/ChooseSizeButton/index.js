import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import COLORS from "../../../../../public/constants/COLORS";
import { SizeOfSneaker } from "../../../../../utils/objects/sizeSneakers";

const ChooseSizeButton = ({ numberSize }) => {
  const [SelectedSize, setSelectedSize] = useState(0);
  return (
    <>
      {SizeOfSneaker.map((item) => (
        <Grid container sm={12} md={6} lg={6}>
          <div style={{}}>
            <button
              key={item.Id}
              onClick={() =>
                setSelectedSize(SelectedSize === item.Id ? 0 : item.Id)
              }
              style={
                SelectedSize === item.Id
                  ? styles.ChangeSneakerButtonClicked
                  : styles.ChangeSneakerButtonDefault
              }
            >
              <Typography
                variant={"h7"}
                style={
                  SelectedSize === item.Id
                    ? styles.SizeTextClicked
                    : styles.SizeTextDefault
                }
              >
                {item.Size}
              </Typography>
            </button>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default ChooseSizeButton;

const styles = {
  ChangeSneakerButtonDefault: {
    backgroundColor: "transparent",
    borderWidth: 2,
    border: "solid",
    borderColor: COLORS.CLEAR_GREY,
    borderRadius: 10,
    width: 50,
    height: 43,
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
