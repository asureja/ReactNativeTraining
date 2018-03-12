import { spongeMock } from 'spongemock';
import chalk from 'chalk';
function chalkFunction(msg: string): string {
  return chalk.blue(msg);
}
function spongeFunction(msg: string): string {
  return spongeMock(msg);
}
function argFunction(msg: string): string {
  return chalkFunction(spongeFunction(msg));
}
console.log(chalkFunction('This is chalk message'));
console.log(spongeFunction('This is sponge message'));
console.log(argFunction(process.argv[2]));
