/// <reference path="../typings/express/express.d.ts" />
var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');
function process(req, res) {
    var info = req.body;
    //info = {
    //    fn: 'get',
    //    params: ['/products', { where: {active:true}}]
    //}
    var params = info.params;
    params.push(function (err, data) {
        process_response(err, data, res);
    });
    client[info.fn].apply(client, params);
}
exports.process = process;
function process_response(err, data, res) {
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
}
//# sourceMappingURL=dispatch.js.map