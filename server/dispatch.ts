

/// <reference path="../typings/express/express.d.ts" />


import Express = require('express');

var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');


interface CallInfo {
    fn: string,    
    params: any[]
}



export function process(req: Express.Request, res: Express.Response) {
        
    var info: CallInfo = req.body;

    info = {
        fn: 'get',
        params: ['/products', { where: {active:true}}]
    }

    var params: any[] = info.params;

    
    params.push((err, data) => {
        process_response(err, data, res);
    });

    client[info.fn].apply(client, params);
    
}



function process_response(err: any, data: any, res: Express.Response) {

    if (err) {

        res.status(500).send(err);

    } else {

        if (!data) {
            data = {}
        }

        res.send({
            response: data
        });
    }

}