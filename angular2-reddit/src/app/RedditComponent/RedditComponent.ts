import { Component } from '@angular/core';
import { Article } from '../ArticleComponent/Article';

@Component({
    selector: 'reddit',
    styleUrls: ['./RedditComponent.css'],
    templateUrl: './RedditComponent.html'
})

export class RedditComponent {
    msg: string;
    article: Article;
    articles: Article[];
    constructor() {
        this.articles = [
            new Article('Ngọc Khương', 'http://ngockhuong.com', 1),
            new Article('Code không khó', 'http://codekhongkho.com', 1),
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('JQuery 2', 'http://jquery.com', 2),
        ];
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        if (title.value !== '' && link.value !== '') {
            console.log(`Thêm một article mới: ${title.value} & ${link.value}`);
            this.article = new Article(title.value, link.value, 0);
            if (this.article.domain() === null) {
                this.msg = 'Link không hợp lệ!';    
                return;
            }
            this.articles.push(this.article);
            title.value = '';
            link.value = '';
            this.msg = '';
        } else {
            this.msg = 'Vui lòng nhập đầy đủ thông tin';
        }
    }
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}