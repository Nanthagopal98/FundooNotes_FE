import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Output() refreshEventFromDisplaytoGetall = new EventEmitter<string>();

  filterNote : any;

  constructor(public dialog:MatDialog, private data:DataService) { }
  message:any
  @Input() notesList:any;
  @Output() updateAutoRefresh = new EventEmitter<string>();


  ngOnInit(): void {
    this.data.incomingData.subscribe((response) => {
      console.log("Search in process", response);
      this.filterNote = response;
    })
  }

  editNoteDialogBox(notes:any){
     const dialogbox = this.dialog.open( UpdatenoteComponent,{
      width:'40%',
      height:'auto',
      data:notes
     })
     dialogbox.afterClosed().subscribe(result =>{
      console.log(result);
      this.updateAutoRefresh.emit(result);
     })
  }

  receivedRefreshEvent($event:any){
    console.log("Icon to Display "+$event);
    this.message = $event;
    this.refreshEventFromDisplaytoGetall.emit(this.message)
  }

}
