import { useState, useEffect } from 'react'
import {useFetch} from '../hooks/useFetch'
import '../App.css'


const url = "http://localhost:3000/produtos";
function Home() {
  const [produtos, setProdutos] = useState([]);
  
  const {data, loading, erro, httpConfig} = useFetch(url); 


const handleDelete = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const lista = data.filter(item => item.id !== id);
      setProdutos([...lista])
    } else {
      console.error('Erro ao deletar item:', response.statusText);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};


  return (
    <>
      <h1>Lista de produtos</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item)=>(
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.categoria}</td>
              <td><button onClick={() => handleDelete(item.id)}>Deletar</button></td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {loading ? <p>Carregando...</p> : ""}
      {erro? <p>Ocorreu um erro </p>:""}
    
    </>
  )
}

export default Home
