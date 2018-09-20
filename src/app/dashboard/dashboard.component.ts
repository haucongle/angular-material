import {Component} from '@angular/core';
import {DataService} from '../data/data.service';
import {Line} from '../line';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

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
