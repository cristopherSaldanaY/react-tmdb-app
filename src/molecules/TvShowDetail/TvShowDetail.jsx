import PropTypes from "prop-types";
import FiveStarRating from "../FiveStarRating/FiveStarRating";
import s from "./particle/style.module.css";

const TvShowDetail = ({tvShow}) => {

  const rating = tvShow.vote_average / 2;

  return (
    <>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </>
  )
}

TvShowDetail.proptypes = {
  tvShow: PropTypes.object
}

export default TvShowDetail
