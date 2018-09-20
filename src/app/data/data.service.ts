import {Injectable} from '@angular/core';
import {Line} from '../line';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ELEMENT_DATA: Line[] = [
    {ext: 0, name: 'Line One'},
    {ext: 1, name: 'Line Two'},
    {ext: 2, name: 'Line Three'},
  ];

  constructor() { }

  getData(): Observable<Line[]> {
    return Observable.of<Line[]>(this.ELEMENT_DATA);
  }
}
