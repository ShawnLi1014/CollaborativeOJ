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
  showSpinner = false;
  showOutput = false;

  output = {
    build: '',
    execute: ''
  };

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
      /** TODO: if a user access the problem without a sessionId,  
          give him a unique sessionId, else if a user access with a sessionId,
          i.e. he is from the link shared by another user, then sessionId is that sessionId 
      */
      console.log(params);
      // this.sessionId = params['id'];
      // this.initEditor();
      console.log(params['id']);
    });
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if(queryParams['sessionId']) {
        this.sessionId = queryParams['sessionId'];
        this.initEditor();
      }
    })
  }

  initEditor() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/solarized_light');
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
    this.showSpinner = true;
    const userCode = this.editor.getValue();
    let data = {
      user_code: userCode,
      lang: this.language.toLowerCase(),
    };
    console.log(data);
    this.data.buildAndRun(data).then(res => {
      this.output.build = res.build;
      this.output.execute = res.run;
      this.showOutput = true;
      this.showSpinner = false;
    });
  }
}
