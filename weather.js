#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCLI = () => {
	const args = getArgs(process.argv)
	if(args.h) {
		// вывод help
		printHelp();
	}
	if(args.s) {
		// Сохранить город
	}
	if(args.t) {
		// Сохранить токен
		saveKeyValue('token', args.t);
	}
	// Вывести погоду
};

initCLI();