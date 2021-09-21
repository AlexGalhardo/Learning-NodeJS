
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const todos = require('./todos');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...todos
};