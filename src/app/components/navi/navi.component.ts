import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CartSummaryComponent,HttpClientModule,RouterModule,CommonModule],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {

}
