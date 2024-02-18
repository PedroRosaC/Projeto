import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 5px black;
    background-color: #ccc;
    margin: 20px auto;
    max-width: 800px;
`;
export const Thead = styled.thead`
`;
export const Tbody = styled.tbody`

`;

export const Tr = styled.tr`
display:flex;
justify-content: space-between;
`;
export const Td= styled.td`
width: 20%;
    padding-top: 15px;
    padding: 10px;
    justify-content: space-around;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    text-align: ${(props) => (props.width ? props.width : "auto")};
    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none" }
    }
`;


export const Th = styled.tr`
    width: 20%;
    text-aling: start;
    border-bottom:inset; 
    justify-content: space-around;
    padding: 10px;
    padding-bottom: 5px;
    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none" }
    }

`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
            <Th >Valor</Th>
            <Th > Descrição</Th>
            <Th  onlyWeb>Tipo</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td >{item.valor}</Td>
            <Td >{item.descricao}</Td>
            <Td onlyWeb>{item.tipo}</Td>
            <Td >
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td >
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;