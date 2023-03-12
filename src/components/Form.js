import styled from "styled-components"

export const Form = () => {
  return (
    <FormContainer>
      Nome do Comprador:
      <input data-test="client-name" placeholder="Digite seu nome..." />
      CPF do Comprador:
      <input data-test="client-cpf" placeholder="Digite seu CPF..." />
      <button data-test="book-seat-btn" >Reservar Assento(s)</button>
    </FormContainer>
  )
}

const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`