import styled from "styled-components"
import {
  BORDASELECIONADO, BGCORSELECIONADO,
  BORDADISPONIVEL, BGCORDISPONIVEL,
  BORDAINDISPONIVEL, BGCORINDISPONIVEL
} from "../style/cores"

export const Seats = ({numAssento, onClick, selected}) => {
  console.log(`componente ${selected}`)
  return (
    <>
      <SeatItem borda={selected} bgcor={selected} data-test="seat" onClick={onClick}>{numAssento}</SeatItem>
    </>
  )
}

const SeatItem = styled.div`
    border: 1px solid ${props => props.border ? BORDASELECIONADO : BORDADISPONIVEL};
    background-color: ${props => props.bgcor ? BGCORSELECIONADO : BGCORDISPONIVEL};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
