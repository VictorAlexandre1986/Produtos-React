import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';

import './cadastro.css'

const url = "http://localhost:3000/produtos";
const Cadastro = () => {
    const [produtos, setProdutos] = useState([]);
  
    const {data, loading, erro, httpConfig} = useFetch(url); 
  
  
  //Adição de produtos
  const [nome,setNome] = useState("");
  const [preco,setPreco] = useState("");
  const [categoria,setCategoria] = useState("");
  
  const handleSubmit = async (e) =>{
      e.preventDefault();
  
      const produto = {
        nome,
        preco,
        categoria
      };
  
      httpConfig(produto,'POST');
  
      setNome("");
      setPreco("");
      setCategoria("");
  
  }
  return (
    <div className="add_produtos">
          <h2>Adicionar produtos</h2>
          <form onSubmit={handleSubmit}>
            <div>
                <label>Nome: </label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label>Preço: </label>
                <input
                    type="number"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                />
            </div>
            <div>
                <label>Categoria:</label>
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="camisa">Camisa</option>
                    <option value="calça">Calça</option>
                    <option value="bermuda">Bermuda</option>
                    <option value="cueca">Cueca</option>
                    <option value="tenis">Tenis</option>
                </select>
            </div>
            { loading && <button type="submit" disabled  value="Aguarde">Aguarde</button>}
            { !loading && <button type="submit" value="Adicionar">Adicionar</button>}
          </form>
    </div>
  )
}

export default Cadastro