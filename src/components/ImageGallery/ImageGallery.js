import {ImageGalleryItem} from "../ImageGalleryItem";
import PropTypes from "prop-types";

export const ImageGallery = ({items, onItemClick}) => {
    return (
        <ul className="ImageGallery">
            {items.map(({ id, webformatURL, tags }) =>
                <ImageGalleryItem
                    key={id}
                    id={id}
                    src={webformatURL}
                    onClick={onItemClick}
                    alt={tags}
                />
            )}
        </ul>
    )
}

ImageGallery.defaultProps = {
    items: [],
    onItemClick: () => {}
}

ImageGallery.propTypes = {
    items: PropTypes.array,
    onItemClick: PropTypes.func
}
