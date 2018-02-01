/**
 * @authors       qzhongyou
 * @date          2017-10-24 17:41:18
 * @description   generater 获取生成
 */

'use strict';

const inquirer = require('inquirer');

let ces = function () {};

ces.prototype.prompting = function (next) {
    let me = this, prompts = [];
    prompts.push({
        type: 'input',
        name: 'projectName',
        message: 'Project Name:',
        default: me.props.projectName
    });
    prompts.push({
        type: 'input',
        name: 'author',
        message: 'author Name:',
        default: me.props.author
    })
    if (!me.props.authorEmail) {
        prompts.push({
            type: 'input',
            name: 'authorEmail',
            message: 'your email:'
        })
    }

    inquirer.prompt(prompts).then(function (answers) {
        foxtrel.util.merge(me.props, answers);
        next();
    })
}



ces.prototype.writing = function () {

    let path = [
        {"views/**": "app/views/"},
        {"server/**": "app/"},
        {"\*\*.js":"\/"},
        {"\*\*.json":"\/"},
        {"\.babelrc": "\.babelrc"},
        {"\.eslintrc": "\.eslintrc"}
    ];

    for (let item of path) {
        for (let key in item) {
            if (item.hasOwnProperty(key)) {
                this.copy(this.templatePath(key), this.destinationPath(item[key]));
            }
        }
    }
}

module.exports = ces;
