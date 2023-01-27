import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function AllUsers() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63c5cf54e1292e5bea2b0e02.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);


    const setData = (data) => {
        let { id, NomeCompleto, Email, CPF,Sexo,data_de_nascimento,Endereço, Cidade,Estado, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('NomeCompleto', NomeCompleto);
        localStorage.setItem('Email', Email);
        localStorage.setItem('CPF', CPF);
        localStorage.setItem('Sexo', Sexo);
        localStorage.setItem('data_de_nascimento', data_de_nascimento)
        localStorage.setItem('Endereço', Endereço);
        localStorage.setItem('Cidade', Cidade);
        localStorage.setItem('Estado', Estado);
        localStorage.setItem('Checkbox Value', checkbox)
    }


    const getData = () => {
        axios.get(`https://63c5cf54e1292e5bea2b0e02.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }


    const onDelete = (id) => {
        axios.delete(`https://63c5cf54e1292e5bea2b0e02.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }


    return (
      <div>
          <Table singleLine>
              <Table.Header>
                  <Table.Row >
                      <Table.HeaderCell className='tabela'>ID</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Nome Completo</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Email</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>CPF</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Sexo</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Data de Nascimento</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Endereço</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Cidade</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Estado</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Checkbox Value</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Update</Table.HeaderCell>
                      <Table.HeaderCell className='tabela'>Delete</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>


              <Table.Body>
                  {APIData.map((data) => {
                      return (
                          <Table.Row>
                      <Table.Cell className='tabela1'>{data.id}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.NomeCompleto}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.Email}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.CPF}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.Sexo}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.data_de_nascimento}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.Endereço}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.Cidade}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.Estado}</Table.Cell>
                      <Table.Cell className='tabela1'>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                              <Link to='/update'>
                                  <Table.Cell className='tabela1'> 
                                      <Button onClick={() => setData(data)}>Update</Button>
                                  </Table.Cell>
                              </Link>
                              <Table.Cell className='tabela1'>
                                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                              </Table.Cell>
                          </Table.Row>
                      )
                  })}
              </Table.Body>
          </Table>
      </div>
  )
}