import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Create() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [NomeCompleto, setNomeCompleto] = useState('');
    const [Email, setEmail] = useState(''); 
    const [CPF,setCPF] = useState('');
    const [Sexo,setSexo] = useState('')
    const [data_de_nascimento,setdata_de_nascimento] = useState('')
    const [Endereço,setEndereço] = useState('')
    const [Cidade,setCidade] = useState('')
    const [Estado,setEstado] = useState('')
    const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios
      .post(`https://63c5cf54e1292e5bea2b0e02.mockapi.io/fakeData`, {
        id,
        NomeCompleto,
        Email,
        CPF,
        Sexo,
        data_de_nascimento,
        Endereço,
        Cidade,
        Estado,
        checkbox,
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <div>
      <Form className="box">
        <Form.Field>
          <label>Nome Completo : </label>
          <input
            placeholder="Nome completo"
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email : </label>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>CPF : </label>
          <input placeholder="CPF" onChange={(e) => setCPF(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Sexo : </label>
          <input
            type="radio"
            id="feminino"
            name="genero"
            value="feminino"
            onChange={(e) => setSexo(e.target.value)}
            required
          ></input>
          <label for="feminino">feminino</label>
          <input
            type="radio"
            id="masculino"
            name="genero"
            value="masculino"
            onChange={(e) => setSexo(e.target.value)}
            required
          ></input>
          <label for="masculino">Masculino</label>
          <input
            type="radio"
            id="outro"
            name="genero"
            value="outro"
            onChange={(e) => setSexo(e.target.value)}
            required
          ></input>
          <label for="outro">Outro</label>
        </Form.Field>
        <FormField>
          <label for="Nascimento">
            <b>Data de Nascimento</b>
          </label>
          <input
            type="date"
            name="data_de_nascimento"
            id="data_de_nascimento"
            className="inputUser"
            onChange={(e) => setdata_de_nascimento(e.target.value)}
            required
          ></input>
        </FormField>
        <FormField>
          <input
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
            className="inputUser"
            onChange={(e) => setCidade(e.target.value)}
            required
          ></input>
          <label for="cidade" className="labelInput"></label>
        </FormField>
        <FormField>
          <input
            type="text"
            name="estado"
            id="estado"
            placeholder="Estado"
            className="inputUser"
            onChange={(e) => setEstado(e.target.value)}
            required
          ></input>
          <label for="estado" className="labelInput"></label>
        </FormField>
        <FormField>
          <input
            type="text"
            name="endereco"
            id="endereco"
            placeholder="Endereço"
            className="inputUser"
            onChange={(e) => setEndereço(e.target.value)}
            required
          ></input>
          <label for="endereco" className="labelInput"></label>
        </FormField>
        <Form.Field>
          <Checkbox
            label="Aceito os Termos e Condições"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <a>
          <Button onClick={postData} type="submit">
            <Link to="/">Cadastrar</Link>
          </Button>
        </a>
      </Form>
    </div>
  );
}
