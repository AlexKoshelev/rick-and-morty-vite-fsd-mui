import React from "react";
interface CardContent {
  image?: string;
  gender?: string;
  name: string;
  species?: string;
  status?: string;
  type?: string;
  dimension?: string;
  air_date?: string;
  episode?: string;
}
const Card: React.FC<CardContent> = ({
  image,
  gender,
  name,
  species,
  status,
  type,
  dimension,
  air_date,
  episode,
}) => {
  return (
    <section className="card-wrapper">
      <div className="header">
        {image && (
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <div className={"header-info"}>
          <h2>{name}</h2>
          <ul>
            <li>{species && "Разновидность: " + species}</li>
            <li>{status && "Статус: " + status}</li>
            <li>{dimension && "Измерение: " + dimension}</li>
            <li>{gender && "Пол: " + gender}</li>
            <li>{type && "Тип: " + type}</li>
            <li>{air_date && "Дата выхода: " + air_date}</li>
            <li>{episode && "Эпизод: " + episode}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Card;
