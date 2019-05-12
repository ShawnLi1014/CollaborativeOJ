import {Component, Inject, OnInit} from '@angular/core';
import { Problem } from '../../models/problem.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[] = [];
  subscriptionProblems: Subscription;
  subscriptionInput: Subscription;

  searchTerm = '';
  constructor(@Inject('data') private data,
              @Inject('input') private input) { }

  ngOnInit() {
    this.getProblems();
    this.getSearchTerm();
  }

  getProblems(): void {
    this.subscriptionProblems = this.data.getProblems().subscribe(problems => this.problems = problems);
  }

  getSearchTerm(): void {
    this.subscriptionInput = this.input.getInput().subscribe(inputTerm => this.searchTerm = inputTerm);
  }

  ngOnDestory() {
    this.subscriptionProblems.unsubscribe();
  }

}
