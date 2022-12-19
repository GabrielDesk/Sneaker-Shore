import styled from "@emotion/styled";
import COLORS from "../../../../../public/constants/COLORS";

const TabTopBarContainer = styled.div`
  width: 90vw;
  height: 5rem;
  padding: 0.1rem;
  display: flex;
  flex-direction: row;
  flex: 1;
  /* background: blue; */
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 15%;
  align-items: center;
`;

const ImageLogo = styled.img`
  height: 80px;
  width: 80px;
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-inline: 10vw;
  align-items: center;
  /* background: blue; */
  /* justify-self: center; */
`;

const ManCategoriesTextStyle = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.buttonColor};
  /* color: ${COLORS.GREY}; */
  background-color: ${COLORS.WHITE_SMOKE};
  border: none;

  &:hover {
    color: ${COLORS.BLACK};
    cursor: pointer;
  }
`;
const WomenCategoriesTextStyle = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.buttonColor};
  /* color: ${COLORS.GREY}; */
  background-color: ${COLORS.WHITE_SMOKE};
  border: none;

  &:hover {
    color: ${COLORS.BLACK};
    cursor: pointer;
  }
`;
const KidsCategoriesTextStyle = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.buttonColor};
  /* color: ${COLORS.GREY}; */
  background-color: ${COLORS.WHITE_SMOKE};
  border: none;

  &:hover {
    color: ${COLORS.BLACK};
    cursor: pointer;
  }
`;
const CustomizeCategoriesTextStyle = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.buttonColor};
  /* color: ${COLORS.GREY}; */
  background-color: ${COLORS.WHITE_SMOKE};
  border: none;

  &:hover {
    color: ${COLORS.BLACK};
    cursor: pointer;
  }
`;

const styleCss = {
  TabTopBarContainer,
  ImageContainer,
  ImageLogo,
  NavItemsContainer,
  ManCategoriesTextStyle,
  WomenCategoriesTextStyle,
  KidsCategoriesTextStyle,
  CustomizeCategoriesTextStyle,
};

export default styleCss;
