import React from 'react';
import DateHelper from '../../helpers/DateHelper';
import './cardNews.css';

export default props => {

    let date = DateHelper.convertStringToDataBR(props.date);

    return (
        <a href={props.url} class="cardNews__link" index={props.index} target="_blank">
            <section className="cardNews shadow">
                <article>
                    <span className="cardNews__boxImage">
                        <img className="cardNews__image"src={props.urlImage} alt="Imagem da notícia"/>
                    </span>
                    <span className="cardNews__content">
                        <p className="cardNews__commonText">{date}</p>
                        <h1 className="cardNews__highlightText">{props.title}</h1>
                        <p className="cardNews__commonText">{props.description}</p>
                        <h2 className="cardNews__highlightText">Por {props.author ? props.author : 'Desconhecido'}</h2>
                    </span>
                </article>
            </section>
        </a>
    );
};