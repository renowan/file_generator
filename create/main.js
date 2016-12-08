// import yeoman from 'yeoman-generator'
// import chalk from 'chalk'
// import yosay from 'yosay'

var inquirer = require('inquirer');


inquirer.prompt([
  {
    type: 'list',
    name: 'kind',
    message: '作りたいファイル種類',
    choices: ['action', 'pageView', 'component', 'redux'],
    default: 'redux'
  },
  {
    type: 'input',
    name: 'name',
    message: 'ファイル名',
    default: 'foo'
  }
]).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
