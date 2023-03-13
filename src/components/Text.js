import styled from "styled-components"
 
export const Text = ({ state }) => {
  return (
    <>
      <TextContainer data-test="movie-info">
        <strong><p>Filme e sessão</p></strong>
        <p>{state.filme?.title}</p>
        <p>{state.filme.day.weekday} - {state.filme.hora}</p>
      </TextContainer>
 
      <TextContainer data-test="seats-info">
        <strong><p>Ingressos</p></strong>
        {state?.comprador?.ids.map(item => <p>{item}</p>)}
      </TextContainer>
 
      <TextContainer data-test="client-info">
        <strong><p>Comprador</p></strong>
        <p>Nome: {state.comprador.name}</p>
        <p>CPF: {state.comprador.cpf}</p>
      </TextContainer>
    </>
  )
}
 
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`