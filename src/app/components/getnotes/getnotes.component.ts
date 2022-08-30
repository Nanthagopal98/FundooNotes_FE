import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
  notesArray:any;
  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit() {
    this.notes.getNotes().subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data;
      console.log("Stored To Array Variable")
      console.log(this.notesArray);
      this.notesArray=this.notesArray.filter((object: any) => {
        return object.trash == false;
        
      })
      this.notesArray = this.notesArray.filter((object:any) =>{
        return object.archive == false;
        
      })
      this.notesArray.reverse()
    })
  }
}
