/// <reference path="../typings/express/express.d.ts" />
var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');
function process(req, res) {
    client.get('/products', { active: true }).then(function (data) {
        res.send("hello world!");
    }).catch(function (err) {
        res.send(err);
    });
}
exports.process = process;
//# sourceMappingURL=dispatch.js.map