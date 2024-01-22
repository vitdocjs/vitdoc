import chalk from 'chalk'
import { consola } from 'consola'



function info(message: string) {
  consola.info(chalk.bgCyan.bold(' INFO ') + ' ' + chalk.whiteBright(message))
}

function success(message: string) {
  consola.success(chalk.bgGreen.bold(' SUCCESS ') + ' ' + chalk.whiteBright(message))
}

function warn(message: string) {
  consola.warn(chalk.whiteBright(message))
}

function error(message: string) {
  consola.error(new Error(message))
}

export default {
  info,
  success,
  warn,
  error
}