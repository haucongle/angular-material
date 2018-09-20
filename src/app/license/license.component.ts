import {Component} from '@angular/core';
import {DataService} from '../data/data.service';
import {Line} from '../line';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent {

  displayedColumns = ['position', 'title'];
  dataSource = new PostDataSource(this.dataService);

  constructor(
    private dataService: DataService,
  ) { }

}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Line[]> {
    return this.dataService.getData();
  }

  disconnect() { }
}
