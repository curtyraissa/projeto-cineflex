import styled, { css } from "styled-components";
import {
  BORDASELECIONADO,
  BGCORSELECIONADO,
  BORDADISPONIVEL,
  BGCORDISPONIVEL,
  BORDAINDISPONIVEL,
  BGCORINDISPONIVEL,
} from "../style/cores";
 
export const Seats = ({ numAssento, onClick, isSelected, isAvailable }) => {
  return (
    <>
      <SeatItem
        isSelected={isSelected}
        isAvailable={isAvailable}
        data-test="seat"
        onClick={onClick}
      >
        {numAssento}
      </SeatItem>
    </>
  );
};
 
const getColors = (isAvailable, isSelected) => {
  if (isSelected) {
    return css`
      border: 1px solid ${BORDASELECIONADO};
      background-color: ${BGCORSELECIONADO};
    `;
  }
 
  if (!isAvailable) {
    return css`
      border: 1px solid ${BORDAINDISPONIVEL};
      background-color: ${BGCORINDISPONIVEL};
    `;
  }
 
  return css`
    border: 1px solid ${BORDADISPONIVEL};
    background-color: ${BGCORDISPONIVEL};
  `;
};
 
const SeatItem = styled.div`
  ${props => getColors(props.isAvailable, props.isSelected)}
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;