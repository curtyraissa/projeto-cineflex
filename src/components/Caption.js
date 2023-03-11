import styled from "styled-components"

export const Caption = () => {
  return (
    <CaptionContainer>
      <CaptionItem>
        <CaptionCircle />
        Selecionado
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle />
        Disponível
      </CaptionItem>
      <CaptionItem>
        <CaptionCircle />
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
const CaptionCircle = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`