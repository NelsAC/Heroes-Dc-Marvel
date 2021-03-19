import React, { useMemo } from "react";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import { useLocation } from "react-router";
import getHeroesByName from "../heroes/selectors/getHeroesByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [values, handleChange] = useForm({
    search: q,
  });
  const { search } = values;
  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-xl">Search Screen</h1>

      <div>
        <form onSubmit={handleSearch} className="w-2/5 block mx-auto">
          <input
            type="text"
            name="search"
            className="w-full mt-8 mb-2 rounded-full border py-2 px-4 outline-none"
            onChange={handleChange}
            value={search}
            autoComplete="off"
          />
          <button
            type="submit"
            className="block mx-auto py-1 px-4 bg-black text-white rounded-full focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <h4 className="text-center mt-8 uppercase font-bold text-2xl">
          Results
        </h4>
        {q === "" || (q !=="" && heroesFilter.length ===0 ) ? (
          <div className="text-center py-16 ">Search a Valid Hero...</div>
        ) : (
          <div className="px-96">
            {heroesFilter.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
