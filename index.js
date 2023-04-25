const Commands = require("./dist/App").default;

function asJson(body, statusCode = 200) {
    return {
        statusCode,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    };
}

exports.handler = async (event, context) => {
    try {
        const r = await Commands.process(event);
        return asJson(r);
    } catch (error) {
        console.error(error.stack ? error.stack : error);
        return asJson({
            error,
            event
        }, 500)
    }
}
