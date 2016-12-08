// import yeoman from 'yeoman-generator'
// import chalk from 'chalk'
// import yosay from 'yosay'

// moduleName

// var inquirer = require('inquirer');
var memFs = require('mem-fs');
// var editor = require('mem-fs-editor');
var editor = require('mem-fs-editor');
//
var store = memFs.create();
var fs = editor.create(store);

fs.read('templates/pageViewIndex.ejs')

// var File = require('vinyl');
// var store = require('mem-fs').create();
//
// var coffeeFile = new File({
//   cwd: '/',
//   base: '/test/',
//   path: '/test/file.coffee',
//   contents: new Buffer('test = 123')
// });
//
// store.add(coffeeFile);


// fs.write('/create/templates/pageViewIndex.ejs', 'var a = 1;');

/*
inquirer.prompt([
  {
    type: 'list',
    name: 'kind',
    message: '作りたいファイル種類',
    choices: ['action', 'pageView', 'component', 'redux'],
    default: 'redux'
  },
  // {
  //   type: 'input',
  //   name: 'name',
  //   message: 'ファイル名',
  //   default: 'foo'
  // }
]).then(function (answers) {
  // console.log(JSON.stringify(answers, null, '  '));


  // fs.copyTpl('/create/templates/pageViewIndex.ejs', '/src/view/index.js', {moduleName: 'fofo'});

  fs.write('somefile.js', 'var a = 1;');

});

*/
