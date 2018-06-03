'use strict';

const validParams = {
    restaurants: {
        location: 'string',
        cuisine: 'string',
        website: 'string',
        name: 'string'
    },
    users: {
        email: 'string',
        drives: 'boolean',
    },
    votes: {
        session: 'number',
        user: 'string',
        cuisine: 'string',
        location: 'string',
        restaurant: 'number',
    },
    sessions: {
        drivers: 'object',
        votes: 'object',
        wingmen: 'object',
        state: 'string',
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

const isValidRequest = (endpoint, input) => {
    if (input !== undefined && Object.keys(input).length > 0 && Object.keys(input).every(
        (key) => {
            if (typeof input[key] === validParams[endpoint][key]) {
                return true;
            } else {
                if (validParams[endpoint][key]) {
                    throwErr(400, `Invalid request: ${key} should be of type ${validParams[endpoint][key]}`);
                } else{
                    throwErr(400, `Invalid request: ${key} is not a valid key`);
                }
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

const checkValid = (event, callback) => {
    try {
        return isValidEndpoint(event.pathParameters.endpoint)
            && (event.httpMethod === 'GET' || event.httpMethod === 'DELETE' || isValidRequest(event.pathParameters.endpoint, event.body))
            && (event.httpMethod === 'GET' || event.httpMethod === 'POST' || hasID(event));
    } catch (e) {
        callback(null, e);
    }
    return false;
};

module.exports.handler = (event, context, callback) => {
    if (checkValid(event, callback)) {
        let response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `Go Serverless v1.0! Your ${event.httpMethod} executed successfully!`,
                input: event,
            }),
        };

        callback(null, response);
    }
};
