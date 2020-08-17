import delay from 'redux-saga';

it('async test 1', done => {
    setTimeout(done, 100);
});

it.skip('async test 1 - don\'t call the callback', done => {
    // setTimeout(done, 100);
});

it('async test 2', () => {
    return new Promise(resolve => setTimeout(resolve, 100));
});

it('async test 3', async () => {
    await delay(100);
});
