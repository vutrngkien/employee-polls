import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion", () => {
  it("fail", async () => {
    const ans = {
      authedUser: "authId",
      qid: "questionId",
      answer: "option",
    };
    await expect(_saveQuestion(ans)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("success", async () => {
    const ans = {
      author: "mtsamis",
      optionOneText: "optionOne",
      optionTwoText: "optionTwo",
    };
    const res = await _saveQuestion(ans);
    expect(res).toBeTruthy();
  });
});

describe("_saveQuestionAnswer", () => {
  it("fail", async () => {
    const ans = {};
    await expect(_saveQuestionAnswer(ans)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("success", async () => {
    const ans = {
      authedUser: "mtsamis",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionOne",
    };
    const res = await _saveQuestionAnswer(ans);
    expect(res).toBeTruthy();
  });
});
