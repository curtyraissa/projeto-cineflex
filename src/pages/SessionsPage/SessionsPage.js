import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Footer } from "../../components/Footer"
import { Session } from "../../components/Session"

export default function SessionsPage() {
  const [sessoes, setSessoes] = useState([])
  const { idFilme } = useParams()
  const selecione = "Selecione o horário"

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    const promise = axios.get(URL)
    promise.then((res) => {
      setSessoes(res.data.days)
      console.log(res.data.days)
    })
    promise.catch((err) => {
      setSessoes(err.response.data.days)
      console.log(err.response.data.days)
    })
  }, [])


  return (
    <PageContainer>
      {selecione}
      <>
        {sessoes.map(s => (
          <Session key={s.id} diaSemana={s.weekday} data={s.date}>
            {s.showtimes.map(st =>
              <Link to={`/assentos/${st.id}`} key={st.id}>
                <button data-test="showtime">{st.name}</button>
              </Link>
            )}
          </Session>
        ))}
      </>
      <Footer>
        <p>Tudo em todo lugar ao mesmo tempo</p>
      </Footer>
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
    a {
      text-decoration: none;
    }
`