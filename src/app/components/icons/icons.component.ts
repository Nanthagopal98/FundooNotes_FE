import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesObject:any
  constructor(private notes:NotesService) { }

  ngOnInit(): void {
  }
  onDelete(){
    let reqData={
      notesId:this.notesObject.notesId,
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
    })
  }
  onArchiev(){
    let reqData = {
      notesId : this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.archievNotes(reqData).subscribe((response:any) =>{
    console.log(response)
    })

  }
  colorArray: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'greenyellow' },
    { code: '#B0C4DE', name: 'LightSteelBlue' },
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine' },
    { code: '#FFE4C4', name: 'Bisque' },
    { code: '#C0C0C0', name: 'Silver' },
    { code: '#BC8F8F', name: 'RosyBrown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

  selectColor(colors:any){
    let reqData = {
      color : colors.name,
      notesId : this.notesObject.notesId
    }
    return this.notes.notesColor(reqData).subscribe((response:any) =>{
      console.log(response)
    })
  }
}
