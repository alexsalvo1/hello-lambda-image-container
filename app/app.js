console.log('Loading function');

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Hello World!');
    return 'Hello World!';
    // throw new Error('Something went wrong');
};