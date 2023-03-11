import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Movie } from "../../components/Movie"

export default function HomePage() {
  const [filmes, setFilmes] = useState([])
  const selecione = "Selecione o filme"

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    const promise = axios.get(URL)
    promise.then((res) => {
      setFilmes(res.data)
      console.log(res.data)
    })
    promise.catch((err) => {
      setFilmes(err.response.data)
      console.log(err.response.data)
    })
  }, [])

  return (
    <PageContainer>
      {selecione}
      <ListContainer>
        {filmes.map(f =>
          <Movie key={f.id} src={f.posterURL} alt={f.title} />
        )}
      </ListContainer>
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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`