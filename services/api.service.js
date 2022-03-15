import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'

const getWeather = async(city) => {
	const token = process.env.TOKEN ? process.env.TOKEN : await getKeyValue(TOKEN_DICTIONARY.token);
	const targetCity = (city) ? city : await getKeyValue(TOKEN_DICTIONARY.city, city);

	if(!token) {
		throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
	}

	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: targetCity,
			appid: token,
			lang: 'ru',
			units: 'metric'
		}
	});

	return data
};

export { getWeather };