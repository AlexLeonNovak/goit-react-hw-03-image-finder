import PropTypes from 'prop-types';

export const LoadMore = ({onLoadMore}) => (
    <div className="Button__wrap">
        <button type="button" className="Button" onClick={onLoadMore}>Load more</button>
    </div>
)

LoadMore.propTypes = {
    onLoadMore: PropTypes.func.isRequired
}
