import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
projects = [
{ title: 'Fuel Delivery Management', tech: 'Angular 14, RxJS,TypeScript', desc: 'Dashboard for managing fuel deliveries and routes.' },
{ title: 'Smart Scheduler & Dispatch', tech: 'Angular 14,REST APIs  ', desc: 'Calendar-based scheduling with drag-and-drop.' },
{ title: 'Order Management Portal', tech: 'Angular 14, REST APIs', desc: 'Order lifecycle management with smart caching.' },
{title:'Profile Admin', tech:'Angular 14', desc:'User profile management with state management.'},
{title:'KCM',tech:'Angular 14,.NET', desc:'Kode Corp Admin Management System.'},
{ title: 'Personal Portfolio', tech: 'Angular 20, Bootstrap', desc: 'Responsive personal portfolio using standalone components.' }
];

}
