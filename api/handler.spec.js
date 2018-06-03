'use strict';
const handler = require('./handler');

const generateStatusCallback = (done, expectedStatusCode) => {
    return (_, result) => {
        expect(result).toHaveProperty('statusCode', expectedStatusCode);
        done();
    };
};

describe('/users endpoint', () => {
    const endpoint = 'users';

    test('GET without id', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('GET with id returns 200', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('POST without id, with valid parameters returns 200', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                email: 'someone@example.com',
                drives: true
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with id, with valid parameters returns 200', (done) => {
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
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('DELETE with id returns 200', (done) => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with body without id returns 400', (done) => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                email: 'fred@email.com'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST without body without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST with body with invalid key without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'fred@email.com'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST with body with invalid datatype without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                email: 74
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

});


describe('/restaurants endpoint', () => {
    const endpoint = 'restaurants';

    test('GET without id', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('GET with id returns 200', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('POST without id, with valid parameters returns 200', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                location: 'Spitfire Square',
                cuisine: 'sushi',
                website: 'goodsushi.co.nz',
                name: 'Good Sushi'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with id, with valid parameters returns 200', (done) => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint,
                id: '1234'
            },
            body: {
                location: 'Spitfire Square',
                website: 'food.com'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('DELETE with id returns 200', (done) => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with body without id returns 400', (done) => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                email: 'fred@email.com'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST without body without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST with body with invalid key without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'fred@email.com'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

});


describe('/votes endpoint', () => {
    const endpoint = 'votes';

    test('GET without id', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('GET with id returns 200', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('POST without id, with valid parameters returns 200', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                session: 123,
                user: 'john@outlook.com',
                restaurant: 4123
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with id, with valid parameters returns 200', (done) => {
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
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('DELETE with id returns 200', (done) => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with body without id returns 400', (done) => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                user: 'fred@email.com'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST without body without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST with body with invalid key without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'fred@email.com'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

});


describe('/sessions endpoint', () => {
    const endpoint = 'sessions';

    test('GET without id', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('GET with id returns 200', (done) => {
        const event = {
            httpMethod: 'GET',
            pathParameters: {
                endpoint,
                id: '1234'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('POST without id, with valid parameters returns 200', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                drivers: ['someone@example.com'],
                state: 'open',
                votes: ['someone@example.com']
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with id, with valid parameters returns 200', (done) => {
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
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('DELETE with id returns 200', (done) => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint,
                id: '123'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 200));
    });

    test('PUT with body without id returns 400', (done) => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: { endpoint },
            body: {
                id: 100
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST without body without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

    test('POST with body with invalid key type without id returns 400', (done) => {
        const event = {
            httpMethod: 'POST',
            pathParameters: { endpoint },
            body: {
                id: 'boop'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 400));
    });

});

describe('Invalid endpoints', () => {

    test('DELETE without id returns 404', (done) => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint: 'gobbldygook'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 404));
    });

    test('DELETE with id returns 404', (done) => {
        const event = {
            httpMethod: 'DELETE',
            pathParameters: {
                endpoint: 'undefined',
                id: 'hello_world'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 404));
    });

    test('POST without id with body returns 404', (done) => {
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
        handler.handler(event, undefined, generateStatusCallback(done, 404));
    });

    test('PUT with id with body returns 404', (done) => {
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
        handler.handler(event, undefined, generateStatusCallback(done, 404));
    });

    test('PUT with id without body returns 404', (done) => {
        const event = {
            httpMethod: 'PUT',
            pathParameters: {
                endpoint: 'notarealendpoint',
                id: 'hello_world'
            }
        };
        handler.handler(event, undefined, generateStatusCallback(done, 404));
    });

});
