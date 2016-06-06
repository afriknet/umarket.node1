

/// <reference path="../typings/express/express.d.ts" />


import Express = require('express');

var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');


interface CallInfo {
    call: string,
    url: string,
    args: any
}


export function process(req: Express.Request, res: Express.Response) {

    var info: CallInfo = req.body;

    client[info.call](info.url, info.args, (err, data) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.send(data);
        }

    });
    
}