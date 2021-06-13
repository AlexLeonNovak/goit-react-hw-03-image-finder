import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.interceptors.request.use(request => {
	request.params['key'] = '21036025-0af45920d07b4b5893c60df1e';
	return request;
});

export const fetchImages = ({
	searchQuery = '',
	page = 1,
	pageSize = 10,
} = {}) => {
	const params = {
		page: page,
		per_page: pageSize,
		q: searchQuery,
	};
	return axios.get('', { params }).then(response => response.data.hits);
};
