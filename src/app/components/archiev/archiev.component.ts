import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-archiev',
  templateUrl: './archiev.component.html',
  styleUrls: ['./archiev.component.scss']
})
export class ArchievComponent implements OnInit {
  archievList:any
  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.notes.getNotes().subscribe((response:any) =>{
      this.archievList = response.data
      this.archievList = this.archievList.filter((object : any) =>{
        return object.archive == true && object.trash == false;
      })
      console.log(this.archievList)
    })
  }
}
