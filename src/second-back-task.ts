export default class SecondBackTask {
  static getResult(a: number, b: number): number {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result = (result * a) % 10;
    }
    return result;
  }
}
