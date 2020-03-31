import React, { useState } from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history =  useHistory();
    
    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
            };
        
        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId,
                }
            })
            console.log('mandou...')
            history.push('/profile');
        } catch (error){
            alert('Erro ao cadastrar novo caso, tente novamente.')
        }
    }

    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Logo"/>
                <h1>Cadastrar novo caso</h1>
                <p>Faça seu cadastro Lorem Ipsum</p>
                <Link className="link-register" to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Titulo do Caso"/>
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Descrição"></textarea>
                <input 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Valor em Reais"/>

                <button className="button">Cadastrar</button>
            </form>

            </div>
        </div>
    );
}