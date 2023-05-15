import css from '../../styles.module.css'
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images}) => (<ul className={css.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem key={id} url={webformatURL} urlLarge={largeImageURL}></ImageGalleryItem>)}
</ul>)

