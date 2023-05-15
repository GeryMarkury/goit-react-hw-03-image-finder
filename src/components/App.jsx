import { fetchImages} from '../Api';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {

  state = {
    images: [],
    isShowModal: false,
    isLoading: false,
    searchQuery: '',
    error: null,
  };


  handleOnSubmit = (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    fetchImages(this.state.searchQuery)
      .then((images) => {
        this.setState({ images });
        console.log(images);
      })
      .catch((error) => {
        this.setState({ error });
        console.log(error)
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

   handleOnChange = event => {
        this.setState({ searchQuery: event.currentTarget.value })
    };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
        {/* <Button></Button>
        <Loader></Loader>
        <Modal></Modal> */}
      </>  
    )
  }
}