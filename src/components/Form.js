import axios from "axios"
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Form = ({ selectedIds, filme }) => {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const navigate = useNavigate()

  function comprar(e) {
    e.preventDefault()

    if (selectedIds.length > 0) {
      const URLPOST = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
      const body = { name, cpf, ids: selectedIds }
      const state = {
        comprador: {
          name,
          cpf,
          ids: selectedIds,
        },
        filme
      }
      const promise = axios.post(URLPOST, body)
      promise.then((res) => navigate('/sucesso', {
        state,
      }))
      promise.catch((err) => console.log(err.response.data.message))
      return;
    }

    return alert('selecione um assento para prosseguir')
  }

  return (
    <FormContainer>
      <form onSubmit={comprar}>
        <Label htmlFor="name">Nome do Comprador:</Label>
        <input
          type="text"
          id="name"
          data-test="client-name"
          placeholder="Digite seu nome..."
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Label htmlFor="cpf">CPF do Comprador:</Label>
        <input
          maxLength="14"
          id="cpf"
          data-test="client-cpf"
          placeholder="Digite seu CPF..."
          required
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />

        <button type="submit" data-test="book-seat-btn" >Reservar Assento(s)</button>
      </form>
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

const Label = styled.label`
  color: #293845;
`