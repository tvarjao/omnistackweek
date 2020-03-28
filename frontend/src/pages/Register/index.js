import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo.svg';



export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

    async function handleRegiester(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        
        try {
            const response = await api.post('/ongs', data);
    
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (error){
            alert('Erro no cadastro! Tente novamente!');
            console.log(error);
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro Lorem Ipsum</p>
                    <Link className="link-register" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegiester}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}