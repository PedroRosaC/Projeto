import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div `
  width: 100%;
  max-width: 800px;
  margin : 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #c0c0c0;
  border: 1px solid black;
  padding: 30px;
  border-radius: 10px;
`;
const Header = styled.header`
    width: 100%;
    min-height: fit-content;
    padding: 40px;
    background-color: darkgray;
    border-bottom: 3px solid black;

`; 

const Title = styled.h1`
`;
const Title2 = styled.h3`
`;


function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
     <Header>
        <Title>Gerenciador Financeiro</Title>
        <Title2>Pedro Rosa Cauduro</Title2>
      </Header>
      <Container>
        
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        <Title2>Saldo final: </Title2>
      </Container>
      <ToastContainer autoClose={3000} position={toast} />
      

      <GlobalStyle />
    </>
  );
}

export default App;