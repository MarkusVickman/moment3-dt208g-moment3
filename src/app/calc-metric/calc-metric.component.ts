import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-metric',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calc-metric.component.html',
  styleUrl: './calc-metric.component.scss'
})

/*Klass som hanterar data till och från html samt beräknar enhetsomvandling.
Varje metod kallas på i html-koden när en av de fyra knapparna trycks på*/

export class CalcMetricComponent {

  converted: number = 0;
  unit: string = "";
  writeinput: number = 0;
  unit2: string = "";

  toFahrenheit(): void {
    this.converted = parseFloat(((this.writeinput * 1.8) + 32).toFixed(1));
    this.unit = "F";
    this.unit2 = "C";
  }

  toCelsius(): void {
    this.converted = parseFloat(((this.writeinput - 32) * 5 / 9).toFixed(1));
    this.unit = "C";
    this.unit2 = "F";
  }

  toFeet(): void {
    this.converted = parseFloat((this.writeinput * 3.28084).toFixed(1));
    this.unit = "fot";
    this.unit2 = "m";
  }

  toMeter(): void {
    this.converted = parseFloat((this.writeinput / 3.28084).toFixed(1));
    this.unit = "m";
    this.unit2 = "fot";
  }
}