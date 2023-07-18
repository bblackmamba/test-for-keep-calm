import FirstBackTask from './first-back-task';
import ActionsTypeEnum from './actions-type.enum';

describe('FirstBackTask', () => {
  describe('getResult', () => {
    it('should return the number of communication sessions in which messages were sent', () => {
      const actions: Array<ActionsTypeEnum> = [ActionsTypeEnum.Start, ActionsTypeEnum.Connect, ActionsTypeEnum.Message, ActionsTypeEnum.End, ActionsTypeEnum.Start, ActionsTypeEnum.Connect, ActionsTypeEnum.Message, ActionsTypeEnum.End];
      expect(FirstBackTask.getResult(actions)).toBe(2);
    });

    it('should return the number of communication sessions in which messages were sent', () => {
      const actions = [ActionsTypeEnum.Start, ActionsTypeEnum.Connect, ActionsTypeEnum.Message, ActionsTypeEnum.End, ActionsTypeEnum.Start, ActionsTypeEnum.Connect, ActionsTypeEnum.Message, ActionsTypeEnum.Message, ActionsTypeEnum.End];
      expect(FirstBackTask.getResult(actions)).toBe(2);
    });

    it('should throw an error if the number of actions is less than 4', () => {
      const actions = [ActionsTypeEnum.Start, ActionsTypeEnum.Connect, ActionsTypeEnum.Message];
      expect(() => FirstBackTask.getResult(actions)).toThrow('Invalid number of actions: less than 4');
    });

    it('should throw an error if the number of actions is greater than 49', () => {
      const actions = [ActionsTypeEnum.Start, ActionsTypeEnum.Connect, ActionsTypeEnum.Message, ActionsTypeEnum.End, ...new Array(46).fill(ActionsTypeEnum.Start)];
      expect(() => FirstBackTask.getResult(actions)).toThrow('Invalid number of actions: greater than 49');
    });
  });
});
