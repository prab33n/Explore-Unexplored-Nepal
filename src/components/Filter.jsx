import React from 'react';

const Filter = ({ categories, selectedCategory, setSelectedCategory, searchText, setSearchText, toggleDarkMode }) => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-2 mb-md-0">
                <form className="input-group search-bar mb-2 mb-md-0 me-md-2" onSubmit={searchText}>
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
                    className="form-select"
                >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <button className="btn btn-secondary mt-2 mt-md-0" onClick={toggleDarkMode}>
                <i className="fa-solid fa-moon"></i>&nbsp;
                <i className="fa-solid fa-sun"></i>
            </button>
        </div>
    );
};

export default Filter;
