import { Component } from '@angular/core';
import {ArabicRomanConverter} from "../../../shared/model/arabic-roman-number-converter/ArabicRomanConverter";

@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.css']
})
export class NumberConverterComponent {

  arabicToRomanConverter: ArabicRomanConverter

  romanToArabicConverter: ArabicRomanConverter

  constructor() {
    this.arabicToRomanConverter = new ArabicRomanConverter()
    this.romanToArabicConverter = new ArabicRomanConverter()
  }

  public convertToRoman() {
    this.arabicToRomanConverter.updateRomanFromArabicNumber()
  }

  public convertToArabic() {
    this.romanToArabicConverter.updateArabicFromRomanNumber()
  }
}
