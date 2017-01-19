import path from 'path'
import ejs from 'ejs'
import fs from 'fs'

var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var hello = fs.readFileSync('./create/templates/pageViewIndex.js', 'utf8');

var hello2 = ejs.render(hello, {
    moduleName:"myMyMy"
});

fs.writeFile(dir + "/a.js", hello2, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


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
