import styled from "styled-components"

export const Seats = () => {
  return (
    <SeatsContainer>
      <SeatItem>01</SeatItem>
      <SeatItem>02</SeatItem>
      <SeatItem>03</SeatItem>
      <SeatItem>04</SeatItem>
      <SeatItem>05</SeatItem>
    </SeatsContainer>
  )
}

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const SeatItem = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
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