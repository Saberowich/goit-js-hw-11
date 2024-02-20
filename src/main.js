
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {displayImages} from './js/render-functions'
import itemTemplate from './js/render-functions';
import getPostsByUser from './js/pixabay-api';

const searchForm = document.querySelector('.js-search-form');
const getImage = document.querySelector(".gallery");
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
     if (!query) {
        return iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
            position: 'topCenter'
        });
    }

    loader.style.display = 'inline-block';
    getPostsByUser(query)
        .then(data => {
            loader.style.display = 'none';
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topCenter'
                });
            }
            else {
                itemTemplate(data.hits, getImage);
                const lightbox = new SimpleLightbox(".gallery a", {
                    captionsData: "alt",
                    captionDelay: 250,
                    captionPosition: 'bottom'
                });
                lightbox.refresh();
            }
        })
        .catch(error => {
            loader.style.display = 'none';
            iziToast.error({
                title: 'Error',
                message: 'There was a problem with the fetch operation. Please try again later.',
                position: 'topCenter'
            });
            e.target.reset();
        });
});