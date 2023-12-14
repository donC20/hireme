import React from "react";
import '../css/searchbar.css'

// search bar in the landing page

function SearchBar() {
    return (
        <>
            <div className="searchBox">
                <input className="searchInput form-control border-0 shadow-none" type="text" name="" placeholder="Enter job keywords"/>
                    <button className="searchButton btn"><img src="icons/search_icon.svg" alt="searchIcon"/></button>
            </div>




        </>
    );
}

export default SearchBar;