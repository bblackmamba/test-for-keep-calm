import ThirdBackTask from "./third-back-task";

describe('ClassName', () => {
  describe('getResult', () => {
    it('should return the correct result for a given input', () => {
      expect(ThirdBackTask.getResult('2{4}3{23}')).toBe('44232323');
      expect(ThirdBackTask.getResult('4{93{2}}')).toBe('9222922292229222');
      expect(ThirdBackTask.getResult('2{4{45}}2{2{33{4}}}')).toBe('45454545454545453444344434443444');
      expect(ThirdBackTask.getResult('2{2{452{2}}2{15}}2{2{33{4}}}')).toBe('4522452215154522452215153444344434443444');
    });

    it('should return an empty string when given an empty string', () => {
      expect(ThirdBackTask.getResult('')).toBe('');
    });

    it('should return the same string if no curly braces are present', () => {
      expect(ThirdBackTask.getResult('123456789')).toBe('123456789');
    });
  });
});
