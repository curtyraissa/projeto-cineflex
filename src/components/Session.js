import styled from "styled-components"

export const Session = ({diaSemana, data, children}) => {
  return (
    <div>
      <SessionContainer>
        {diaSemana} - {data}
        <ButtonsContainer>
          {children}
        </ButtonsContainer>
      </SessionContainer>
    </div>
  )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`