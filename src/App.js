import './App.css';
import {Component} from "react";

import {fetchImages} from './services/pixabay-api';

import {Modal} from "./components/Modal";
import {Searchbar} from "./components/Searchbar";
import {ImageGallery} from "./components/ImageGallery";
import {Loader} from "./components/Loader";
import {LoadMore} from "./components/LoadMore";

class App extends Component {

  state = {
    images: [],
    showModal: false,
    largeImgUrl: '',
    searchQuery: '',
    page: 1,
    isLoading: true
  };

  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  showLargeImage = (id) => {
    const {images} = this.state;
    const imageData = images.find(image => image.id === id);
    this.setState({largeImgUrl: imageData.largeImageURL});
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setSearchQuery = searchQuery => {
    this.setState({searchQuery, images: [], page: 1});
  }

  getImages = () => {
    const {searchQuery, page} = this.state;
    this.setState({isLoading: true})
    fetchImages({searchQuery, page})
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1
        }));
      }).finally(() => this.setState({isLoading: false}));
  }


  render() {
    const {showModal, images, largeImgUrl, isLoading} = this.state;
    const isShowModal = showModal && largeImgUrl;

    return (
        <>
          <Searchbar onSubmit={this.setSearchQuery} />

          {images.length
              ? <>
                <ImageGallery items={images} onItemClick={this.showLargeImage}/>
                <LoadMore onLoadMore={this.getImages} />
              </>
              : <Loader />
          }

          {isLoading && <Loader />}

          {isShowModal &&
          <Modal onClose={this.toggleModal}>
            <img src={largeImgUrl} alt={largeImgUrl}/>
          </Modal>
          }
        </>
    )
  }
}

export default App;
