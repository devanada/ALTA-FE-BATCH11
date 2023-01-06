import { useNavigate } from "react-router-dom";
import { FC } from "react";

import Button from "./Button";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  labelButton?: string;
  onClickFav?: () => void;
}

// const Card: FC<CardProps> = (props) => {
const Card: FC<CardProps> = ({ id, image, title, labelButton, onClickFav }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure onClick={() => onClickDetail()}>
        <img
          className="mx-auto"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
      </figure>
      <div className="card-body items-center justify-between">
        <h2 className="card-title text-center" onClick={() => onClickDetail()}>
          {title}
        </h2>
        <div className="card-actions w-full justify-center">
          <Button label={labelButton} onClick={onClickFav} />
        </div>
      </div>
    </div>
  );
};

export default Card;
