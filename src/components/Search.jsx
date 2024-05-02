import search from "../assets/images/search.svg"

const Search = () => {
  return (
    <>
      <button className="btn btn-light" type="submit">
      <img src={search} alt="Compras"width={25}></img>Buscar artículos
      </button>
    </>
  );
};

export default Search;