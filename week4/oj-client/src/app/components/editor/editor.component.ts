import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

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

  sessionId: string;

  output: string;

  defaultContent = {
    'Java' : 'public class Example {\n' +
      '\tpublic static void main(String[] args) {\n' +
      '\t\t// Type your code here\n' +
      '\t}\n' +
      '}',
    'C++' : '#include <iostream>\n' +
      '\tusing namespace std:\n' +
      '\tint main() {\n' +
      '\t\t//Type your code here\n' +
      '\t\treturn 0;\n' +
      '\t}',
    'Python' : 'class Solution:\n' +
      '\tdef example():\n' +
      '\t\t# Write your Python code here'
  };

  languageMode = {
    'Java' : 'java',
    'C++' : 'c_cpp',
    'Python': 'python'
  };

  constructor(@Inject('collaboration') private collaboration,
              @Inject('data') private data,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      this.initEditor();
      console.log(params);
    });
  }

  initEditor() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
    document.getElementsByTagName('textarea')[0].focus();
    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;
    this.editor.on('change', (e) => {
      console.log('editor changes: ' + JSON.stringify(e));
      if (this.editor.lastAppliedChange !== e) {
        this.collaboration.change(JSON.stringify((e)));
      }
    });
    this.editor.getSession().getSelection().on('changeCursor', () => {
      const cursor = this.editor.getSession().getSelection().getCursor();
      console.log('cursor moves: ' + JSON.stringify(cursor));
      this.collaboration.cursorMove(JSON.stringify(cursor));
    });
    this.collaboration.restoreBuffer();
  }

  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }

  resetEditor(): void {
    this.editor.getSession().setMode('ace/mode/' + this.languageMode[this.language]);
    this.editor.setValue(this.defaultContent[this.language]);
  }

  submit(): void {
    const userCode = this.editor.getValue();
    let data = {
      user_code: userCode,
      lang: this.language.toLowerCase(),
    };
    console.log(data);
    this.data.buildAndRun(data).then(res => this.output = res.text);
  }
}
