// @ts-ignore
exports.handler = async (event) => {
    var body: any = {
        message:'Hello from Lambda!',
        path: event.path,
        httpmethod: event.httpMethod
    }

    const response: any = {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    return response;
};
