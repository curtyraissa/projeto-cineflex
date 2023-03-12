import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Caption } from "../../components/Caption"
import { Footer } from "../../components/Footer"
import { Form } from "../../components/Form"
import { Seats } from "../../components/Seats"

export default function SeatsPage() {
  const [assento, setAssento] = useState([])
  const { idSessao } = useParams()
  const selecione = "Selecione o(s) assento(s)"

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    const promise = axios.get(URL)
    promise.then((res) => {
      setAssento(res.data.seats)
      console.log(res.data.seats)
    })
    promise.catch((err) => {
      setAssento(err.response.data.seats)
      console.log(err.response.data.seats)
    })
  }, [])

  return (
    <PageContainer>
      {selecione}

      <SeatsContainer>
        {assento.map(a =>
          <Seats key={a.id} numAssento={a.id} />
         )}
      </SeatsContainer>

      <Caption />
      <Form />
      <Footer>
        <p>Tudo em todo lugar ao mesmo tempo</p>
        <p>Sexta - 14h00</p>
      </Footer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`