/// <reference path="../typings/express/express.d.ts" />
var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');
function process(req, res) {
    var info = req.body;
    client[info.call](info.url, info.args, function (err, data) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            if (!data) {
                data = {};
            }
            res.send({
                response: data
            });
        }
    });
}
exports.process = process;
//# sourceMappingURL=dispatch.js.map