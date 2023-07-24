import PropTypes from 'prop-types';
import TvShowListItem from '../TvShowListItem/TvShowListItem';
import s from "./particle/style.module.css";

//stateless
const TvShowList = ({ onClickItem, tvShowList }) => (
  <>
    <div className={s.title}>You probably like:</div>
    <div className={s.list}>
      {
        tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.spanItem}>
              <TvShowListItem tvShow={tvShow} onClick={onClickItem}/>
            </span>
          )
        })
      }
    </div>
  </>
)

TvShowList.propTypes = {
  onClickItem: PropTypes.func,
  tvShowList: PropTypes.array
}
export default TvShowList
