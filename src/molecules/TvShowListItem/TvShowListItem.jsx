import PropTypes from "prop-types";
import { SMALL_IMAGE_COVER_BASE_URL, MAX_TITLE_CHAR } from "../../config";
import s from "./particle/style.module.css";
import noImage from "../../assets/images/no-image.png"

const TvShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div className={s.container} onClick={onClick_}>
      <img
        src={tvShow.backdrop_path != null ? SMALL_IMAGE_COVER_BASE_URL + tvShow.backdrop_path : noImage}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

TvShowListItem.propTypes = {
  tvShow: PropTypes.object,
  onClick: PropTypes.func,
};

export default TvShowListItem;
