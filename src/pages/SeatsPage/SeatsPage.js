import styled from "styled-components"
import { Caption } from "../../components/Caption"
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
      
      {/* components footer */}
      <FooterContainer>
        <div>
          <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster" />
        </div>
        <div>
          <p>Tudo em todo lugar ao mesmo tempo</p>
          <p>Sexta - 14h00</p>
        </div>
      </FooterContainer>

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

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`