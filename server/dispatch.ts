

/// <reference path="../typings/express/express.d.ts" />


import Express = require('express');

var Schema = require('schema-client');
var client = new Schema.Client('afriknetmarket', 'WRvloJ7OlLsNCAjPFfp1wJcRwyNU5pQ2');

export function process(req: Express.Request, res: Express.Response) {

    client.get('/products', { active: true }).then(data => {

        res.send("hello world!");

    }).catch(err=> {

        res.send(err);

    });



}