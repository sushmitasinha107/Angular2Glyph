// core of angular2. always need it
import {Component} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder,Validators} from '@angular/forms';


// import the components
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {Like2Component} from './like2.component';
import {VoterComponent} from './voter.component';
import {TweetsComponent} from './challenge/tweets.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component' ;

@Component({
    // element selector my-app
    selector: 'my-app',

    template: `<h1>Welcome to Angular 2</h1>

               My Favorite with style:  <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
               <br>               
               No style : <span class="glyphicon glyphicon-star"></span> <br>
               Exercise 1 : Like Component
               <like [count]="tweet.likeCount" [isLike]="tweet.isLike" ></like><br>
               Mosh's solution :
               <like2  [totalLikes]="tweet.likeCount" [iLike]="tweet.isLike"></like2><br>
              <span>  Exercise 2 : Voter Component
               <voter 
                      [voteCount]="post.voteCount"
                      [myVote]="post.myVote"
                      (vote)="onVote($event)">
               </voter>
              </span>
              <br>
              <h4>Challenge </h4>
              <tweets></tweets> 
              <zippy title="Who can see my profile?">
                 Content of who can see my profile
             </zippy>
             <zippy title="Who can see my contact info?">
                 Content of who can see my contact info
             </zippy>

              `,
              
    // including those components
   directives:[ZippyComponent, FavoriteComponent,LikeComponent,Like2Component,VoterComponent,TweetsComponent ]
})

export class AppComponent {
  post = {
      title: "Title",
      isFavorite: true,
      voteCount:10,
      myVote: 0
  };
  
  tweet = {
      likeCount: 9,
      isLike: false
  }
  
  onVote($event){
      console.log($event);
  }
  
  onFavoriteChange($event){
      console.log($event)
  }
}