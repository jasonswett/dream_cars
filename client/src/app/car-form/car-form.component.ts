import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/common';
import { Car } from '../car';

@Component({
  moduleId: module.id,
  selector: 'car-form',
  templateUrl: 'car-form.component.html',
  styleUrls: ['car-form.component.css']
})

export class CarFormComponent implements OnInit {

  car = new Car(0, '2002', 'BMW', '325xi');
  constructor(public http: Http) {}

  ngOnInit() {
  }

  onSubmit() {
    let body = JSON.stringify({ car: this.car });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('/api/cars.json', body, options)
      .subscribe(response => console.log(response));
  }

}
