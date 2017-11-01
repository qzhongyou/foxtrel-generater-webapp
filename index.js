/**
 * @authors       qzhongyou
 * @date          2017-10-24 17:41:18
 * @description   generater 获取生成
 */

'use strict';

var inquirer = require('inquirer');

var ces = function () {};

ces.prototype.prompting = function (next) {
    var me = this, prompts = [];
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

module.exports = ces;