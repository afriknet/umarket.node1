/// <reference path="../typings/express/express.d.ts" />
"use strict";
var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');
function process(req, res) {
    res.send('hello world!');
}
exports.process = process;
//# sourceMappingURL=dispatch.js.map