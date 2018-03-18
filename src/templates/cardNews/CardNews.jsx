import React from 'react';
import './cardNews.css';

export default props => (
    <section  className="cardNews shadow">
        <article>
            <span className="cardNews__boxImage">
                <img className="cardNews__image"src={props.urlImage} alt="Imagem da notícia"/>
            </span>
            <p className="cardNews__commonText">Data</p>
            <h1 className="cardNews__highlightText">{props.title}</h1>
            <p className="cardNews__commonText">{props.title}</p>
            <h2 className="cardNews__highlightText">Por {props.author ? props.author : 'Desconhecido'}</h2>
        </article>
    </section>
);