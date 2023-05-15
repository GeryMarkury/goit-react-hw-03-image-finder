import css from '../../../styles.module.css';

export const ImageGalleryItem = ({url, urlLarge}) => (<li className={css.ImageGalleryItem}>
  <img src={url} alt="" />
</li>)