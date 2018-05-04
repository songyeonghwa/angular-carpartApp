import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                          // 개발자가 정의하는 태그
  // template : `<h1> {{ title }}</h1>`,         // 컴포넌트 안에 직접 탬플릿 코드 작성도 가능함(화면이 간단할 경우만 사용)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular5';
  // imageUrl = 'assets/images/angularImg.jpg';
  // myHandler(evt) {
  //   alert("버튼 클릭됨!" + evt.target.textContent); // event binding
  // }

  constructor() {
    console.log("AppComponent constructor called");
  }

  ngOnInit() {
    console.log("AppComponent ngOnInit() called");
  }

  ngOnDestroy() {
    console.log("AppComponent ngOnDestroy() called");
  }

}


