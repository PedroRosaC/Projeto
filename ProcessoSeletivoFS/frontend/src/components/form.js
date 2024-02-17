import axios from "axios";
import React, { useEffect,useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";


const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap:wrap;
    background-color: #ccc;
    padding: 20px;
    box-shadow: 0 0 5px  black;
    border-radius: 5px; 

`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;

`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    height: 40px;
    background-color:#f0f0f0f0;
    border-radius: 5px;
    border: 1px solid #b0b0b0;
`; 
const Label = styled.label`

`; 
const Select = styled.select`
background-color: #f0f0f0f0;
width: 120px;
padding: 0 10px;
height: 42px;
border-radius: 5px;
border: 1px solid #bbb;
cursor: text;
`;
const Option = styled.option`
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: lightgreen;
    border: 1px solid darkgreen;
    color: green;
    height: 42px;
    padding: 10px;
    border-radius: 4px;
`; 


const Form = ({ getUsers, onEdit, setOnEdit}) => {

    const ref = useRef();

    useEffect(() => {
        if(onEdit){
            const user = ref.current;

            user.valor.value = onEdit.valor;
            user.descricao.value = onEdit.descricao;
            user.tipo.value = onEdit.tipo;
        }
        },[onEdit]); 



        const handleSubmit = async(e) => {
            e.preventDefault();

            const user = ref.current;

            if (!user.valor.value || !user.descricao.value || !user.tipo.value ) {
                return toast.warn("preencha todos os campos");
            }
            if(onEdit){
                await axios
                .put("http://localhost:8800/" + onEdit.id,{
                    valor: user.valor.value,
                    descricao: user.descricao.value,
                    tipo: user.tipo.value
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));
            }else{
                await axios
                .post("http://localhost:8800/",{
                    valor: user.valor.value,
                    descricao: user.descricao.value,
                    tipo: user.tipo.value
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));

            }

            user.valor.value = "";
            user.descricao.value = "";
            user.tipo.value = "";

            setOnEdit(null);
            getUsers();

        }
        

    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Valor</Label>
                <Input name="value" type="text"></Input>
            </InputArea>
            <InputArea>
                <Label>Descrição</Label>
                <Input name="descricao" type="text"></Input>
            </InputArea>
            <InputArea>
                <Label>Tipo</Label>
                <Select name="tipo" >
                    <Option value=" "></Option>
                    <Option value="saldoInicial">Saldo inicial</Option>
                    <Option value="ganho">Ganho</Option>
                    <Option value="despesa">Despesa</Option>
                </Select>
            </InputArea>
         
            
            <Button type="submit"  >Salvar</Button>
        </FormContainer>

    );

}

export default Form;