export const Searchbar = () => {
  return (
    <header className="searchbar">
      <form onSubmit={this.handleSearchSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          name="searchQ"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
