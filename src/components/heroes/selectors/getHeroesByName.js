import { heroes } from "../../../api/db.json";

const getHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  }
  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};

export default getHeroesByName;
