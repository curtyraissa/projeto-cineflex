import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Seats } from "../../components/Seats";
import { Caption } from "../../components/Caption";
 
export default function SeatsPage() {
  const [assento, setAssento] = useState([]);
  const [filme, setFilme] = useState({});
  const { idSessao } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const selecione = "Selecione o(s) assento(s)";
 
  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(URL);
    promise.then((res) => {
      setAssento(res.data.seats);
 
      const movie = {
        movie: res.data.movie,
        day: res.data.day,
        hora: res.data.name
      }
 
      setFilme(movie);
    });
    promise.catch((err) => {
      setAssento(err.response.data.seats);
      setFilme({});
    });
  }, [idSessao]);
 
  function escolherAssento(isAvailable, id) {
    if(isAvailable) {
      if (selectedSeats.includes(id)) return setSelectedSeats(selectedSeats.filter(a => a !== id))
      else return setSelectedSeats((prevState) => [...prevState, id]);
    }
    return alert('Esse assento não está disponível')
  }
 
  return (
    <PageContainer>
      {selecione}
 
      <SeatsContainer>
        {assento.map((a) => {
          const isSelected = selectedSeats.find((item) => item === a.id);
          return (
            <Seats
              key={a.id}
              numAssento={a.name}
              isSelected={isSelected}
              isAvailable={a.isAvailable}
              onClick={() => escolherAssento(a.isAvailable, a.id)}
            />
          );
        })}
      </SeatsContainer>
 
      <Caption />
 
      <Form selectedIds={selectedSeats} filme={filme} />
 
      <Footer src={filme.movie?.posterURL} alt={filme.movie?.title}>
        <p>{filme.movie?.title}</p>
        <p>
          {filme.day?.weekday} - {filme?.hora}
        </p>
      </Footer>
    </PageContainer>
  );
}
 
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
 