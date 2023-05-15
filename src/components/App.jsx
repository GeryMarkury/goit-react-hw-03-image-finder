import { fetchImages} from '../Api';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {

  state = {
    images: [],
    isShowModal: false,
    isLoading: false,
    searchQuery: '',
    error: null,
    page: 1,
  };


  handleOnSubmit = (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });
    this.setState({ isLoading: true, images: [], page: 1 });
    this.fetchImagesWithQuery(this.state.searchQuery, 1);
    };

  handleLoadMore = () => {
    const nextPage = this.state.page + 1;
    this.fetchImagesWithQuery(this.state.searchQuery, nextPage);
  };

  fetchImagesWithQuery = (searchQuery, page) => {
    fetchImages(searchQuery, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: page,
        }));
      })
      .catch((error) => {
        this.setState({ error });
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

   handleOnChange = event => {
        this.setState({ searchQuery: event.currentTarget.value })
    };

  render() {
 
    const { images, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}></Searchbar>
        <ImageGallery images={images}></ImageGallery>
        {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
        <Loader></Loader>
        {/* <Modal></Modal> */}
      </>  
    )
  }
}