import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";


export default function Update() {
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


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setNomeCompleto(localStorage.getItem('NomeCompleto'))
        setEmail(localStorage.getItem('Email'));
        setCPF(localStorage.getItem('CPF'));
        setdata_de_nascimento(localStorage.getItem('data_de_nascimento'));
        setEndereço(localStorage.getItem('Endereço'));
        setCidade(localStorage.getItem('Cidade'));
        setEstado(localStorage.getItem('Estado'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);


    const updateAPIData = () => {
        axios.put(`https://63c5cf54e1292e5bea2b0e02.mockapi.io/fakeData/${id}`, {
            NomeCompleto,
            Email,
            CPF,
            Sexo,
            data_de_nascimento,
            Endereço,
            Cidade,
            Estado,
            checkbox
        }).then(() => {
            history.push('/users')
        })
    }
    return (
        <div className="box">
                    <form action="">
                        <fieldset>
                            <legend><b>Editar cadastro de clientes</b></legend>
                            <br></br>
                            <div className="inputbox">
                                <input  placeholder="Nome Completo" value={NomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required></input>
                                <label for='nome' className="labelInput"></label>                 
                            </div>
                            <br></br>
                            <div className="inputbox">
                                <input  placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)}required></input>
                                <label for='email' className="labelInput"></label>                 
                            </div>
                            <br></br>
                            <div className="inputbox">
                                <input  placeholder="CPF" value={CPF} onChange={(e) => setCPF(e.target.value)}required></input>
                                <label for='CPF' className="labelInput"></label>                 
                            </div>
                            <br></br>
                            <div className="inputbox">
                                <input placeholder="Telefone" className="inputUser" required></input>
                                <label for='Telefone' className="labelInput"></label>                 
                            </div>
                            <br></br>
                            <p>Sexo</p>
                            <input type='radio' id= 'feminino'  name='genero' value='feminino' onChange={(e) => setSexo(e.target.value)}required></input>
                            <label for='feminino'>feminino</label>
                            <input type='radio' id= 'masculino'  name='genero' value='masculino'onChange={(e) => setSexo(e.target.value)} required></input>
                            <label for='masculino'>Masculino</label>
                            <input type='radio' id= 'outro'  name='genero' value='outro'onChange={(e) => setSexo(e.target.value)} required></input>
                            <label for='outro'>Outro</label>
                            <br></br>
                            <div className="inputbox">
                                <label for='data_de_nascimento'><b>Data de Nascimento</b></label>                 
                                <input type="date" name="data_de_nascimento" id="data_de_nascimento" value={data_de_nascimento} onChange={(e) => setdata_de_nascimento(e.target.value)} required></input>
                            </div>
                            <br></br>
                            <div className="inputbox">
                                <input  placeholder="Cidade" value={Cidade} onChange={(e) => setCidade(e.target.value)} required></input>
                                <label for='cidade' className="labelInput"></label>                 
                            </div>
                            <br></br>
                            <div className="inputbox">
                                <input placeholder="Estado"value={Cidade} onChange={(e) => setEstado(e.target.value)}  required></input>
                                <label for='estado' className="labelInput"></label>                 
                            </div>
                            <br></br>
                            <div className="inputbox">
                                <input  placeholder="Endereço" value={Endereço}    onChange={(e) => setEndereço(e.target.value)} required></input>
                                <label for='endereco' className="labelInput"></label>                 
                            </div>
                            <br></br>
                            <Checkbox label ='Aceito os termos e condições' onChange={(e) => setCheckbox(!checkbox)}/>
                            <br></br>
                            <Button  onClick={updateAPIData} type='submit'>
                            <Link to="/">Editar</Link>
                            </Button>
                            

                        </fieldset>
                    </form>
                </div>
    )}