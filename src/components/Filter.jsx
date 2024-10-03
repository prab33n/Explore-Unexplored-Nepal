import React from 'react';

const Filter = ({ categories, selectedCategory, setSelectedCategory, searchText, setSearchText, toggleDarkMode }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
                {/* <input
          type="text"
          placeholder="Search..."
          className="form-control me-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        /> */}
                <form className="input-group search-bar" onSubmit={searchText}>
                    <span className="input-group-text" id="basic-addon1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </form>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="form-select me-2"
                >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <button className="btn btn-secondary" onClick={toggleDarkMode} >                
                <i className="fa-solid fa-moon"></i>&nbsp;
                <i className="fa-solid fa-sun"></i>

            </button>
        </div>
    );
};

export default Filter;
