import { handleFetchQuestion } from "./fetch-question-saga";

describe('Fetch question saga', () => {
  it('should fetch the questions', async () => {
    // console.log('test running');
    const gen = handleFetchQuestion({question_id: 42});
    const { value } = gen.next();
    expect(value).toEqual([{question_id: 42}]);
  });
});