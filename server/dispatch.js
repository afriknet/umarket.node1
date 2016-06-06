/// <reference path="../typings/express/express.d.ts" />
var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');
function process(req, res) {
    var info = req.body;
    client[info.call](info.url, info.args).then(function (data) {
        res.send(data);
    }).catch(function (err) {
        res.send(err); // send error code
    });
}
exports.process = process;
//# sourceMappingURL=dispatch.js.map