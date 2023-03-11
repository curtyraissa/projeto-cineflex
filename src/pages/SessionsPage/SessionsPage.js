import styled from "styled-components"
import { Footer } from "../../components/Footer"
import { Session } from "../../components/Session"

export default function SessionsPage() {
  const selecione = "Selecione o horário"

  return (
    <PageContainer>
      {selecione}
      <Session />
      <Footer/>
    </PageContainer>
  )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`