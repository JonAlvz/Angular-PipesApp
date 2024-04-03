import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  public nameLower: string = 'jon';
  public nameUpper: string = 'JON';
  public nameTitle: string = 'jOn aLVaREz';

  public customDate: Date = new Date();
}
