import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar =(props)=> {
    return(
        <div className="ui pointing menu">
            <div className="ui container">
                <Link to="/" className="item"><i className="icon home"></i> Home</Link>
                <Link to="/videos" className='item'>Videos</Link>
                <Link to="/play-list" className="item">Play List</Link>
                <Link to="/my-videos" className="item">My Videos</Link>
                <div className="ui right item">
                    <SearchBar onSubmit={props.onSearchBarSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;