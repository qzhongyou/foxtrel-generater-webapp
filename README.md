## foxtrel-generater-webapp
基于foxtrel开发的一款脚手架

### 自定义用户输入
```
let inquirer = require('inquirer');
let me = this;
let ces = function (){};
ces.prototype.prompting = function (next) {
    var me = this, prompts = [];
    prompts.push({
        type: 'input',
        name: 'projectName',
        message: 'Project Name:',
        default: me.props.projectName
    });
    inquirer.prompt(prompts).then(function (answers) {
        foxtrel.util.merge(me.props, answers);
        next();
    })
}
```

### 自定义创建文件目录

```
ces.prototype.writing = function () {
    var me = this;
    //拷贝整个文件
    me.copy(me.templatePath("**"), me.destinationPath("/"));
    me.copy(me.templatePath("a.js"), me.destinationPath("b.js"));
}
```

### 可用属性及函数说明

* this.props
默认提供 `projectName`,`author`,`authorEmail`等基础信息。
* templatePath
参数: String 入口文件
模板入口文件路径,根路径默认为`process.cwd()`,根据`foxtrel install -r <path>`可自定义根路径。
* destinationPath
参数: String 出口文件
模板输出文件路径,根路径同上。
* copy
参数: 入口文件路径 / 出口文件路径
文件拷贝
 






