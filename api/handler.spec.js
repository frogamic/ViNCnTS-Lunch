'use strict';
const handler = require('./handler');

describe('/users endpoint', () => {
    const endpoint = 'users';

    test('GET without id', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('GET with id returns 200', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('POST without id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                email: 'someone@example.com',
                drives: true
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint,
                id: '1234'
            },
            body: {
                email: 'someone@example.com',
                drives: true
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('DELETE with id returns 200', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with body without id returns 400', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                email: 'fred@email.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST without body without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST with body with invalid key without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'fred@email.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST with body with invalid datatype without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                email: 74
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

});

describe('/restaurants endpoint', () => {
    const endpoint = 'restaurants';

    test('GET without id', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('GET with id returns 200', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('POST without id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                locations: ['Spitfire Square'],
                cuisines: ['sushi', 'japanese'],
                website: 'goodsushi.co.nz',
                name: 'Good Sushi'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint,
                id: '1234'
            },
            body: {
                locations: ['Spitfire Square', 'Wairakei Shops'],
                website: 'food.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('DELETE with id returns 200', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with body without id returns 400', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                email: 'fred@email.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST without body without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST with body with invalid key without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'fred@email.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

});

describe('/locations endpoint', () => {
    const endpoint = 'locations';

    test('GET without id', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('GET with id returns 200', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('POST without id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                city: 'Christchurch',
                coordinates: '101e300.5n',
                name: 'Spitfire Square'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint,
                id: '1234'
            },
            body: {
                city: 'Auckland'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('DELETE with id returns 200', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with body without id returns 400', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                city: 'Melbourne'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST without body without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST with body with invalid key without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'fred@email.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

});

describe('/votes endpoint', () => {
    const endpoint = 'votes';

    test('GET without id', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('GET with id returns 200', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('POST without id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                session: 123,
                user: 'john@outlook.com',
                restaurant: 4123
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint,
                id: '1234'
            },
            body: {
                user: 'someone@example.com',
                cuisine: 'Thai'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('DELETE with id returns 200', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with body without id returns 400', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                user: 'fred@email.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST without body without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST with body with invalid key without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'fred@email.com'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

});

describe('/sessions endpoint', () => {
    const endpoint = 'sessions';

    test('GET without id', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('GET with id returns 200', async () => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('POST without id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                drivers: ['someone@example.com'],
                state: 'open'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with id, with valid parameters returns 200', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint,
                id: '1234'
            },
            body: {
                drivers: ['bob@bob.website'],
                wingmen: ['harold@itwhiz.net']
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('DELETE with id returns 200', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 200);
    });

    test('PUT with body without id returns 400', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                id: 100
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST without body without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

    test('POST with body with invalid key type without id returns 400', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'boop'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 400);
    });

});

describe('Invalid endpoints', () => {

    test('DELETE without id returns 404', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint: 'gobbldygook'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 404);
    });

    test('DELETE with id returns 404', async () => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint: 'undefined',
                id: 'hello_world'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 404);
    });

    test('POST without id with body returns 404', async () => {
        const event = {
            httpMethod: 'POST',
            pathParameters: {
                endpoint: 'nothing',
            },
            body: {
                param: 'value',
                num: 123
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 404);
    });

    test('PUT with id with body returns 404', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint: 'notarealendpoint',
                id: 'hello_world'
            },
            body: {
                param: 'value',
                num: 123
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 404);
    });

    test('PUT with id without body returns 404', async () => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint: 'notarealendpoint',
                id: 'hello_world'
            }
        };
        return expect(await handler.handler(event)).toHaveProperty('statusCode', 404);
    });

});
