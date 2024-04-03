import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Jon';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Malenia';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = [
    'Jon',
    'Ander',
    'Pepe',
    'Alberto',
    'Jose',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'No hay clientes esperando',
    '=1': 'Hay un cliente esperando',
    other: 'Hay # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Jon',
    age: 23,
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos respuesta');
    }, 3500);
  });
}
