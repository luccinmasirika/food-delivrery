const dayjs = require('dayjs');
var isToday = require('dayjs/plugin/isToday');
dayjs.extend(isToday);

const test = new Date();

console.log(dayjs(test).isToday());
