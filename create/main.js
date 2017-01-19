// import path from 'path'
import ejs from 'ejs'
import fs from 'fs'
import inquirer from 'inquirer'

// var dir = './tmp';
//
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }
//
// var hello = fs.readFileSync('./create/templates/pageViewIndex.js', 'utf8');
//
// var hello2 = ejs.render(hello, {
//     moduleName:"myMyMy"
// });
//
// fs.writeFile(dir + "/a.js", hello2, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });


// ↑　完成

// var coffeeFile = new File({
//   cwd: '/',
//   base: '/test/',
//   path: '/test/file.coffee',
//   contents: new Buffer('test = 123')
// });
//
// store.add(coffeeFile);


// fs.write('/create/templates/pageViewIndex.ejs', 'var a = 1;');


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

  const kind = answers.kind
  const name = answers.name

  const tplCollection = {
    'action'   : 'action.js',
    'pageView' : 'pageView.js',
    'component': 'component.js',
    'redux'    : 'redux.js',
  }

  const dir = `./dist/${kind}/`
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  var tpl = fs.readFileSync('./create/templates/' + tplCollection[kind] , 'utf8');
  var fileSource = ejs.render(tpl, {
      moduleName: name,
      upperName: name,
      name: name
  });
  fs.writeFile(dir + "/" + tplCollection[kind] , fileSource, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  });


  // console.log(answers);
  // fs.write('somefile.js', 'var a = 1;');

});
