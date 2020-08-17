import { handleFetchQuestion } from "./fetch-question-saga";
import fetch from "isomorphic-fetch"; // imports the mock version

describe('Fetch question saga', () => {
  beforeAll(() => {
    fetch.__setValue([{question_id: 42}]);
  });

  it('should fetch the questions', async () => {
    // console.log('test running');
    const gen = handleFetchQuestion({question_id: 42});
    const { value } = gen.next();
    expect(value).toEqual([{question_id: 42}]);
    expect(fetch).toHaveBeenCalledWith('/api/questions/42');
  });
});