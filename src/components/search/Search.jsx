import React from 'react';
import search from '../../assets/images/search.png';
import './search.css';

export default props => {

    let open = props.isOpenSearch ? 'open' : '';

    return (
        <div className="search">
            <img className="search__icon" src={search} alt="Botão search" onClick={props.openSearch}/>
            <div class={`search__boxInput ${open}`}>
                <input type="text" className="search__input" placeholder="Pesquisa"/>
                <button className="search__close" onClick={props.closeSearch}>X</button>    
            </div>
        </div>
    );
}
