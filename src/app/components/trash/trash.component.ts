import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList:any
  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.getTrashList()
  }
  getTrashList(){
    this.notes.getNotes().subscribe((response : any) =>{
      console.log(response);
      this.trashList = response;
      this.trashList = response.filter((object:any) =>{
        return object.trash === true
      } )

    })
  }

}
