import { Component } from '@angular/core';
import { CalcMetricComponent } from '../calc-metric/calc-metric.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [CalcMetricComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {

}
