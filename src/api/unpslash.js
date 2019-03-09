import axios from 'axios';

export default axios.create({
	baseURL:"https://api.unsplash.com",
	headers:{
		Authorization: 'Client-ID 0222fea27939c60ba4e285af4a4fa6523f2ed01a916afc0e00c76a023cfc295f'
	}
});