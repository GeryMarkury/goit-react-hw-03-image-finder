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

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const images = fetchImages("react");
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={onSubmit}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
        <Button></Button>
        <Loader></Loader>
        <Modal></Modal>
      </>  
    )
  }
}