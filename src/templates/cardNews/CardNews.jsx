import React from 'react';
import DateHelper from '../../helpers/DateHelper';
import './cardNews.css';

export default props => {

    let date = DateHelper.convertStringToDataBR(props.date);

    return (
        <a href={props.url} className="cardNews__link" index={props.index} target="" key={props.key}>
            <section className="cardNews shadow">
                <article>
                    <span className="cardNews__boxImage">
                        <img className="cardNews__image"src={props.urlImage} alt="Imagem da notícia"/>
                    </span>
                    <span className="cardNews__content">
                        <p className="cardNews__commonText">{date}</p>
                        <h1 className="cardNews__highlightText">{props.title}</h1>
                        <p className="cardNews__commonText">{props.description}</p>
                        <h2 className="cardNews__highlightText">{props.author ? `Por ${props.author}`  : ''}</h2>
                    </span>
                </article>
            </section>
        </a>
    );
};