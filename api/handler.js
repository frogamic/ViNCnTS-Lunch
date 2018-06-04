'use strict';

const aws = require('aws-sdk');

const validParams = {
    locations: {
        name: 'string',
        coordinates: 'string',
        city: 'string'
    },
    restaurants: {
        locations: 'object',
        cuisines: 'object',
        website: 'string',
        menuUri: 'string',
        name: 'string'
    },
    users: {
        email: 'string',
        drives: 'boolean',
        city: 'string'
    },
    votes: {
        session: 'number',
        user: 'string',
        cuisine: 'string',
        restaurant: 'number'
    },
    sessions: {
        office: 'string',
        drivers: 'object',
        wingmen: 'object',
        state: 'string',
        endTime: 'string'
    },
};

const throwErr = (statusCode, message) => {
    throw {statusCode, body: JSON.stringify({message})};
};

const isValidEndpoint = (endpoint) => {
    if (endpoint in validParams) {
        return true;
    } else {
        throwErr(404, 'Endpoint not found');
    }
};

const isValidPayload = (endpoint, input) => {
    if (input !== undefined && Object.keys(input).length > 0 && Object.keys(input).every(
        (key) => {
            if (typeof input[key] === validParams[endpoint][key]) {
                return true;
            } else if (validParams[endpoint][key] === undefined) {
                throwErr(400, `Invalid request: ${key} is not a valid key`);
            } else{
                throwErr(400, `Invalid request: ${key} should be of type ${validParams[endpoint][key]}`);
            }
        }
    )) {
        return true;
    } else {
        throwErr(400, 'Request must include a body');
    }
};

const hasID = (event) => {
    if (event.pathParameters.id !== undefined) {
        return true;
    } else {
        throwErr(400, 'No ID specified');
    }
};

const checkValid = (event) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(isValidEndpoint(event.pathParameters.endpoint)
                && (event.httpMethod === 'GET' || event.httpMethod === 'DELETE' || isValidPayload(event.pathParameters.endpoint, event.body))
                && (event.httpMethod === 'GET' || event.httpMethod === 'POST' || hasID(event)));
        } catch (e) {
            reject(e);
        }
    });
};

module.exports.handler = async (event) => {
    return await checkValid(event).then(() => {

        const db = new aws.DynamoDB.DocumentClient();

        let response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Go Serverless v1.0! Your ${event.httpMethod} executed successfully!`,
                input: event,
            }),
        };

        return response;
    }).catch((e) => {
        return e;
    });
};
