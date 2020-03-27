function errorHandler(err) {

    if (typeof err === 'error') {
        throw err;
    }
    else {
        console.error('Unexpectedly, no error was passed to error handler. But here is the message:',err);
    }
}