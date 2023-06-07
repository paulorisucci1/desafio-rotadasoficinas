export class NumberConverterService {
  public convertToRoman(num: number): string {
    const romanNumerals: { [key: string]: number } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let result = '';

    for (const key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }

    return result;
  }

  public convertToArabic(roman: string): number {
    const romanNumerals: { [key: string]: number } = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };

    let result = 0;
    let i = 0;

    while (i < roman.length) {
      const currentSymbol = roman[i];
      const nextSymbol = roman[i + 1];

      if (nextSymbol && romanNumerals[nextSymbol] > romanNumerals[currentSymbol]) {
        result += romanNumerals[nextSymbol] - romanNumerals[currentSymbol];
        i += 2;
      } else {
        result += romanNumerals[currentSymbol];
        i += 1;
      }
    }

    return result;
  }

}
