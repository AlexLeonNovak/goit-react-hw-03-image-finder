import PropTypes from "prop-types";

export const ImageGalleryItem = ({id, alt, src, onClick}) => {
    return (
        <li className="ImageGalleryItem" onClick={() => onClick(id)}>
            <img src={src} alt={alt} className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    // largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
