import { heroes } from "../../../api/db.json";
const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no encontrado`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
export default getHeroesByPublisher;
