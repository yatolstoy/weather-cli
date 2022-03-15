import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (message) => {
	console.log(dedent`
	${chalk.bgRed(' ERROR ')} 
	${message}`)
}

const printSuccess = (message) => {
	console.log(dedent`
	${chalk.bgGreen(' SUCCESS ')} 
	${message}`)
}
const printHelp = () => {
	const message = `Без параметров - вывод погоды
		-s [CITY] - для установки города
		-t [TOKEN] - для установки токена
		-h - для вывода помощи`
	console.log(dedent`
	${chalk.bgYellow(chalk.black(' HELP '))} 
	${message}`)
}

const printWeather = (data) => {
		const message = dedent`
			В городе ${data.name} сегодня ${data.weather[0].description}
			Температура: ${data.main.temp_min} - ${data.main.temp_max}, ощущается как ${data.main.feels_like}
			Ветер: ${data.wind.speed} м/с`
		console.log(dedent`${chalk.bgYellow(chalk.black(' WEATHER '))} 
											 ${message}`)
}

export {printError, printSuccess, printHelp, printWeather} ;