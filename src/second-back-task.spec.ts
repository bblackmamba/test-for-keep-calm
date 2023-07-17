import SecondBackTask from "./second-back-task";

describe('SecondBackTask', () => {
  describe('getResult', () => {
    it('should return the correct result for valid inputs', () => {
      expect(SecondBackTask.getResult(7, 3)).toBe(3);
      expect(SecondBackTask.getResult(5, 123456789)).toBe(5);
      expect(SecondBackTask.getResult(2, 10)).toBe(4);
    });

    it('should return 1 when the exponent is 0', () => {
      expect(SecondBackTask.getResult(7, 0)).toBe(1);
    });
  });
});

