import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class AppComponent implements OnInit{
  name;
  show; 
  dialogRef;
  typingSpeed = 75;
  constructor(public dialog: MatDialog) {
    
  }
  ngOnInit(): void {
    this.openDialog()
  }

  openDialog() {
    window.scrollTo(0, 0);
    this.dialogRef = this.dialog.open(UserComponent, {
      autoFocus: false,
      disableClose: true,
      data: {name: this.name}
    })
    this.dialogRef.afterClosed().subscribe(result => {
      this.name = result.name[0].toUpperCase() + result.name.slice(1);
      this.handleTypingIntro();
    })
  }

  handleTypingIntro() {
    let greeting = ' Hey ' + this.name + '! '
    let basetime = this.getTypeTime(greeting);
    window.scrollTo(0, 0);
    this.typeWriter(greeting, 'nameIntro', 0)
    basetime = this.handleNewSentence(this.name.toLowerCase().trim()==='keiffer'? ' My name is also Keiffer ':' My name is Keiffer ', 'myName',basetime)
    basetime = this.handleNewSentence('- Self Starter -', 'attribute1',basetime)
    basetime = this.handleNewSentence('- Problem Solver -', 'attribute2',basetime)
    basetime = this.handleNewSentence('- Innovator -', 'attribute3',basetime)
    setTimeout(()=>{this.show = true},basetime);
  }

  getTypeTime(str) {
    return str.length * this.typingSpeed + 1000;
  }

  handleNewSentence(text,id,basetime) {
    let i = 0;
    setTimeout(()=>{this.typeWriter(text, id,i)}, basetime)
    return basetime += this.getTypeTime(text)
  }

  typeWriter(text,id,i) {
    if(i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i)
        i++
     setTimeout(()=>{this.typeWriter(text,id,i)},this.typingSpeed)
    }
  }

  scroll(el: HTMLElement) {
    setTimeout(()=>{
      el.scrollIntoView({behavior: 'smooth'});
    }, 150)
  }
}
