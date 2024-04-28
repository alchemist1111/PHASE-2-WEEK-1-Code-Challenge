function Search({dataSearch, search}) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search Your Recent Transactions...."
        name="search"
        value={search}
        onChange={dataSearch}
      />
    </div>
  );
}
export default Search;