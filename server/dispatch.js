/// <reference path="../typings/express/express.d.ts" />
var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');
function process(req, res) {
    res.send({
        response: 'hello world'
    });
    //var info: CallInfo = req.body;
    //client[info.call](info.url, info.args, (err, data) => {
    //    if (err) {
    //        res.status(500).send(err);
    //    } else {
    //        res.send(data);
    //    }
    //});
}
exports.process = process;
//# sourceMappingURL=dispatch.js.map