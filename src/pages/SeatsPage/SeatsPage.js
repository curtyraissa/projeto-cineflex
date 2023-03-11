import styled from "styled-components"
import { Caption } from "../../components/Caption"
import { Footer } from "../../components/Footer"
import { Form } from "../../components/Form"
import { Seats } from "../../components/Seats"

export default function SeatsPage() {
  const selecione = "Selecione o(s) assento(s)"

  return (
    <PageContainer>
      {selecione}
      <Seats />
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