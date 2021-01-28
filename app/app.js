console.log('Loading function');

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    var msg = 'Hello World!';
    
    console.log(msg);
    return msg;
    // throw new Error('Something went wrong');
};