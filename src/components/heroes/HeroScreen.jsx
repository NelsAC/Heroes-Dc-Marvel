import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import getHeroesById from "./selectors/getHeroesById";

const HeroScreen = ({ history }) => {

  const { heroeId } = useParams();

  const hero=useMemo(() => getHeroesById(heroeId), [heroeId]);

  !hero && <Redirect to="/" />;

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  let color = "";
  publisher === "Marvel Comics" ? (color = "red") : (color = "blue");

  let typeHero = "";
  color === "red" ? (typeHero = "marvel") : (typeHero = "dc");

  const handleBack = () => {
    history.length <= 2 ? history.replace(`/${typeHero}`) : history.goBack();
  };

  return (
    <div className="">
      <h1 className={`text-center text-3xl font-bold text-${color}-800`}>
        {superhero}
      </h1>
      <div className="flex justify-between items-center py-6 px-52">
        <div className="animate__animated animate__fadeInLeft">
          <div>
            <p>
              <span className={`font-bold text-lg text-${color}-800`}>
                Publiser:
              </span>
              {publisher}
            </p>
            <p>
              <span className={`font-bold text-lg text-${color}-800`}>
                Alter Ego:
              </span>
              {alter_ego}
            </p>
            <p>
              <span className={`font-bold text-lg text-${color}-800`}>
                First Appearance:
              </span>
              {first_appearance}
            </p>
          </div>
          <h3
            className={`mt-8 font-bold text-xl text-center text-${color}-800`}
          >
            Characters
          </h3>
          <p
            className={`rounded-full border bg-transparent my-4 py-1 px-4 w-max border-${color}-800`}
          >
            {characters}
          </p>
          <div className="flex justify-end">
            <button
              className="mt-8 py-1 px-8 rounded-sm bg-black text-white"
              onClick={handleBack}
            >
              {"< Back"}
            </button>
          </div>
        </div>
        <div className="rounded-full h-80 w-80 mx-auto overflow-hidden mt-6">
          <img
            className="animate__animated animate__fadeInDown"
            src={`../assets/heroes/${heroeId}.jpg`}
            alt={superhero}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
