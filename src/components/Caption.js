import styled from "styled-components"
import {
  BORDASELECIONADO, BGCORSELECIONADO,
  BORDADISPONIVEL, BGCORDISPONIVEL,
  BORDAINDISPONIVEL, BGCORINDISPONIVEL
} from "../style/cores"

export const Caption = () => {
  return (
    <CaptionContainer>
      <CaptionItem>
        <CaptionCircle bgcor={BGCORSELECIONADO} borda={BORDASELECIONADO} />
        Selecionado
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle bgcor={BGCORDISPONIVEL} borda={BORDADISPONIVEL} />
        Disponível
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle bgcor={BGCORINDISPONIVEL} borda={BORDAINDISPONIVEL} />
        Indisponível
      </CaptionItem>
    </CaptionContainer>
  )
}

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`
const CaptionCircle = styled.div`
  border: 1px solid ${props => props.borda};
  background-color: ${props => props.bgcor};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`