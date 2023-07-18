import ActionsTypeEnum from './actions-type.enum';

export default class FirstBackTask {
  static getResult(actions: string[]): number {
    if (actions.length < 4) {
      throw new Error('Invalid number of actions: less than 4');
    } else if (actions.length > 49) {
      throw new Error('Invalid number of actions: greater than 49')
    }

    let count = 0;
    let sessionStarted = false;
    let connectionEstablished = false;
    let messageSent = false;

    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];

      if (action === ActionsTypeEnum.Start) {
        if (!sessionStarted) {
          sessionStarted = true;
        }
        else {
          continue;
        }
      }
      else if (action === ActionsTypeEnum.Connect) {
        if (sessionStarted && !connectionEstablished) {
          connectionEstablished = true;
        }
        else {
          continue;
        }
      }
      else if (action === ActionsTypeEnum.Message) {
        if (sessionStarted && connectionEstablished) {
          messageSent = true;
        }
        else {
          continue;
        }
      }
      else if (action === ActionsTypeEnum.End) {
        if (sessionStarted && connectionEstablished && messageSent) {
          count++;
          sessionStarted = false;
          connectionEstablished = false;
          messageSent = false;
        }
        else {
          continue;
        }
      }
      else {
        throw new Error('Invalid command: ' + action);
      }
    }

    return count;
  }
}
