import { Component } from '@angular/core';
import { Article } from '../ArticleComponent/Article';

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: './RedditArticleComponent.html'
})  

export class RedditArticleComponent {
    article: Article;

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}