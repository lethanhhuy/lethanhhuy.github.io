import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
    Articles
} from './model/articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
    articles : Articles[] = [];
    articlesDisp;
    currentId : number;
    newId : number;
    title : string;
    slug : string;
    body : string;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.ngArticleList();
        this.title;
    }

    ngArticleList = () => {
        const url = 'http://localhost/ng-cake/articles/index';
        this.http.get(url).subscribe(res => {
            this.articlesDisp = res;
        });
    }

    addArticle = (event : Event) => {
        this.articles = [];
        this.newId = 2;
        //this.articles.push(new Articles(this.newId, this.title, this.slug, this.body));
        const url = 'http://localhost/ng-cake/articles/add';
        this.http.post(url, new Articles(this.newId, this.title, this.slug, this.body)).subscribe(
            res => {
                console.log(res);
            }
        );
    }

}
