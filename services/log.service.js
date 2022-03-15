import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (message) => {
	console.log(`${chalk.bgRed(' ERROR ')} ${message}`)
}

const printSuccess = (message) => {
	console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`)
}
const printHelp = () => {
	console.log(dedent`
		${chalk.bgYellow(chalk.black(' HELP '))}
		Без параметров - вывод погоды
		-s [CITY] - для установки города
		-t - для установки токена
		-h - для вывода помощи
	`)
}

export {printError, printSuccess, printHelp} ;