import { heroes } from "../../../api/db.json";
const getHeroesById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
export default getHeroesById;
