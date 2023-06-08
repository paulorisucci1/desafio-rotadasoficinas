export class ArabicRomanConverter {
  arabicNumber?: number

  romanNumber?: string

  private readonly romanNumerals: { [key: string]: number } = {
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

  public updateRomanFromArabicNumber(): void {
    const reversedOrderRomanNumerals = Object.keys(this.romanNumerals).reverse()

    let result = '';

    for (const key of reversedOrderRomanNumerals) {
      while (this.arabicNumber! >= this.romanNumerals[key]) {
        result += key;
        this.arabicNumber! -= this.romanNumerals[key];
      }
    }

    this.romanNumber = result
  }

  public updateArabicFromRomanNumber(): void {

    let result = 0;
    let i = 0;
    this.romanNumber = this.romanNumber?.toUpperCase()

    while (i < this.romanNumber!.length) {
      const currentSymbol = this.romanNumber![i];
      const nextSymbol = this.romanNumber![i + 1];

      if (nextSymbol && this.romanNumerals[nextSymbol] > this.romanNumerals[currentSymbol]) {
        result += this.romanNumerals[nextSymbol] - this.romanNumerals[currentSymbol];
        i += 2;
      } else {
        result += this.romanNumerals[currentSymbol];
        i += 1;
      }
    }

    this.arabicNumber = result
  }
}
