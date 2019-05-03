import { Component, OnInit } from '@angular/core';

declare  var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;
  public languages: string[] = ['Java', 'C++', 'Python'];
  language = 'Java';

  defaultContent = {
    Java : 'public class Example {\n' +
      '\tpublic static void main(String[] args) {\n' +
      '\t\t// Type your code here\n' +
      '\t}\n' +
      '}'
  };

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.editor.getSession().setMode('ace/mode/java');
    this.editor.setValue(this.defaultContent.Java);
    this.editor.$blockScrolling = Infinity;
  }

}
