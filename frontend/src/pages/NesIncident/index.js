import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


export default function NewIncident(){
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
            <form>
                <input placeholder="Titulo do Caso"/>
                <textarea placeholder="Descrição"></textarea>
                <input placeholder="Valor em Reais"/>
                <button className="button">Cadastrar</button>
            </form>

            </div>
        </div>
    );
}