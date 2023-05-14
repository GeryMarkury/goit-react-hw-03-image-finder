import css from 'styles.module.css';

export const ImageGalleryItem = ({webformatURL, largeImageURL}) => (<li className={css.ImageGalleryItem}>
  <img src={webformatURL} alt="" />
</li>)