import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <span>Bem vinda, a APAD</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor</strong>
                    <p>R$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor</strong>
                    <p>R$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor</strong>
                    <p>R$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor</strong>
                    <p>R$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição teste</p>

                    <strong>Valor</strong>
                    <p>R$ 500,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                    
            </ul>
        </div>
    );
}