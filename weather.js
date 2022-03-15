#!/usr/bin/env node
import dedent from 'dedent-js'

import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async(token) => {
	if(!token.length) {
		printError('Не передан токен');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Токен сохранён');
	} catch (e) {
		printError(e.message);
	}
}

const saveCity = async (city) => {
	if(!city) {
		printError('Не передан город')
	}

	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('Город сохранён')
	} catch (e) {
			printError(e.message);
	}
}

const printWeather = async () => {
	try {
		const data = await getWeather(process.env.city);
		const message = dedent`
	
		В городе ${data.name} сегодня ${data.weather[0].description}
		Температура: ${data.main.temp_min} - ${data.main.temp_max}, ощущается как ${data.main.feels_like}
		Ветер: ${data.wind.speed} м/с
		`
		printSuccess(message)
	} catch (e) {
		if(e?.response?.status === 404) {
			printError('Неверно указан город');
		} else if(e?.response?.status === 401) {
			printError('Неверно указан токен');
		} else {
			printError(e.message);
		}
	}
}

const initCLI = () => {
	const args = getArgs(process.argv);
	if(args.h) {
		// вывод help
		printHelp();
	}
	if(args.s) {
		// Сохранить город
		return saveCity(args.s);
	}
	if(args.t) {
		// Сохранить токен
		return saveToken(args.t);
	}
	// Вывести погоду
	printWeather();
};

console.log(process.env)
initCLI();