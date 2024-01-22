import chalk from 'chalk'
import { consola as log } from 'consola'



function info(message: string) {
  log.info(chalk.bgCyan(' Vitdoc:INFO ') + ' ' + chalk.whiteBright(message))
}

function success(message: string) {
  log.success(chalk.bgGreen(' Vitdoc:SUCCESS ') + ' ' + chalk.whiteBright(message))
}

function warn(message: string) {
  log.warn(chalk.whiteBright(message))
}

function error(message: string) {
  log.error(new Error(message))
}

export default {
  info,
  success,
  warn,
  error
}