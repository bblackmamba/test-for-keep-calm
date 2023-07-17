import ActionsTypeEnum from './actions-type.enum';

export default class FirstBackTask {
  static getResult(actions: ActionsTypeEnum[]): number {
    if (actions.length < 4) {
      throw new Error('Invalid number of actions: less than 4');
    } else if (actions.length > 49) {
      throw new Error('Invalid number of actions: greater than 49')
    }

    let count = 0;
    let sessionStarted = false;
    let connectionEstablished = false;

    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];

      if (action === ActionsTypeEnum.Start) {
        if (!sessionStarted) {
          sessionStarted = true;
        }
        else {
          throw new Error('Invalid sequence of commands: "start" command already called');
        }
      }
      else if (action === ActionsTypeEnum.Connect) {
        if (sessionStarted && !connectionEstablished) {
          connectionEstablished = true;
        }
        else {
          throw new Error('Invalid sequence of commands: "connect" command called out of order');
        }
      }
      else if (action === ActionsTypeEnum.Message) {
        if (sessionStarted && connectionEstablished) {
          count++;
        }
        else {
          throw new Error('Invalid sequence of commands: "message" command called out of order');
        }
      }
      else if (action === ActionsTypeEnum.End) {
        if (sessionStarted && connectionEstablished) {
          sessionStarted = false;
          connectionEstablished = false;
        }
        else {
          throw new Error('Invalid sequence of commands: "end" command called out of order');
        }
      }
      else {
        throw new Error('Invalid command: ' + action);
      }
    }

    return count;
  }
}
