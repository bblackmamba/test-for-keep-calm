export default class ThirdBackTask {
  static getResult(data: string): string {
    const parseData = (str: string, multiplier: number) => {
      let res = '';

      for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '{') {
          const newStr = str.slice(i + 1);
          const firstOpen = str.slice(i + 1).indexOf('{');
          const firstClose = str.slice(i + 1).indexOf('}');

          if (firstOpen > firstClose || firstOpen === -1) {
            res = res.slice(0, -1);

            res += parseData(newStr.slice(0, firstClose), parseInt(str[i - 1]));

            i = i + firstClose;
          } else {
            let open = firstOpen;
            let close = firstClose;
            while (open < close && open !== -1) {
              open = newStr.indexOf('{', open + 1);
              close = newStr.indexOf('}', close + 1);
            }

            res = res.slice(0, -1);
            res += parseData(newStr.slice(0, close + 1), parseInt(str[i - 1]));

            i = i + close;
          }
        } else if (char === '}') {
        } else {
          res += char;
        }
      }

      if (multiplier > 1) {
        return parseData(res.repeat(multiplier), 1);
      }

      return res;
    };

    return parseData(data, 1);
  }
}
