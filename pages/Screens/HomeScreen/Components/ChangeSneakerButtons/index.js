import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import COLORS from "../../../../../public/constants/COLORS";
import { ChangeSneaker } from "../../../../../utils/objects/ChangeSneakerButton";

const ChangeButtonSneaker = () => {
  const [SelectedButton, setSelectedButton] = useState(0);

  return (
    <>
      {ChangeSneaker.map((item) => (
        <>
          <div>
            <button
              key={item.Id}
              onClick={() =>
                setSelectedButton(SelectedButton === item.Id ? 0 : item.Id)
              }
              style={
                SelectedButton === item.Id
                  ? styles.ChangeSneakerButtonClicked
                  : styles.ChangeSneakerButtonDefault
              }
            >
              {item.Id === 1 ? (
                <FaLongArrowAltLeft
                  size={20}
                  style={
                    SelectedButton === item.Id
                      ? styles.StyleIconClicked
                      : styles.StyleIconDefault
                  }
                />
              ) : (
                <FaLongArrowAltRight
                  size={20}
                  style={
                    SelectedButton === item.Id
                      ? styles.StyleIconClicked
                      : styles.StyleIconDefault
                  }
                />
              )}
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default ChangeButtonSneaker;

const styles = {
  ChangeSneakerButtonDefault: {
    backgroundColor: "transparent",
    borderWidth: 2,
    border: "solid",
    borderColor: COLORS.CLEAR_GREY,
    borderRadius: 20,
    width: 90,
    height: 43,
    alignItems: "center",
    cursor: "pointer",
  },
  ChangeSneakerButtonClicked: {
    backgroundColor: COLORS.BLACK,
    borderWidth: "1px",
    borderRadius: 20,
    width: 90,
    height: 43,
    alignItems: "center",
    cursor: "pointer",
  },

  StyleIconDefault: {
    color: COLORS.BLACK,
  },
  StyleIconClicked: {
    color: COLORS.WHITE,
  },
};
