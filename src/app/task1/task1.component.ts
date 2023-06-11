import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
interface User {
  id: number,
  firstname: string,
  lastname: string
}
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  currentPage=0;
  hasNextPage:boolean=true;
  hasPreviousPage: boolean=false;

  constructor(private http: HttpClient) { }
  ngAfterViewInit(): void {

  }
  onPaginateChange($event:any) {
    this.hasNextPage= this.paginator.hasNextPage();
    this.hasPreviousPage=this.paginator.hasPreviousPage();
    this.currentPage=$event.pageIndex
  }
  ngOnInit(): void {
    this.http.get('../../assets/user_data.json').subscribe((data: any) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
