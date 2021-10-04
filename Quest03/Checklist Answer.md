# Answer 03. 자바스크립트와 DOM

## Topics
* 자바스크립트의 역사
* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`
  

## 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
<pre>
1993년
- NCSA의 Mosaic Web Browser 탄생
- 모자이크 웹 브라우저를 이끌던 팀장 마크 안드레센은 대학 졸업과 동시에 NetScape 라는 회사를 설립
- 이전에 만들었던 모자이크 웹 브라우저를 토대로 Netscape Navigator를 만듦. 시장에서 80%의 점유율을 가짐
- Brendan Eich와 협력해 짧은 시간 안에 프로토 타입을 베이스로 한 LiveScript Interpreter가 탄생
1995년
- Netscape Navigator와 위의 엔진이 포함이 된 JavaScript가 출시됨
- 마이크로소프트에서 자바스크립트를 리버스 엔지니어링을 해서 JScript라고 출시함
1996년 11월
- Netscape에서 ECMA International에 자바스크립트로 표준안을 만들자 제안
1997년 7월
- ECMAScript 1을 만듦
2000년
- 마이크로소프트사는 인터넷 익스플로어로 시장의 95%를 차지하게 되고, 표준화에서 빠지게 됨
2004년
- Moz://a Firefox 가 ECMAScript 4에 자기네들 표준안을 제안하지만 거절 당함
- Jesse James Garrett가 비동기적으로 데이터를 서버에서 받아오고 처리할 수 있도록 도와주는 AJAX(Asynchronous JavaScript and XML)를 만듦.
- 위에 언급된 3사간의 경쟁이 벌어짐
- 많은 개발자들이 웹 시장에 유입 되고 커뮤니티(JQuery, clojo, mootools)가 만들어짐
2008년
- Google이 JIT(just-in-time compilation 자바스크립트를 엄청 빠른 속도로 실행 가능한 강력한 엔진)이 포함된 Chrome이 등장
2008년 7월
- 4사가 표준안을 진행
2009년
- ECMAScript 5가 탄생
2015년
- ECMAScript 6가 탄생
이후 매해 새로운 버전들이 나오고 있음
</pre>

### Q. 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
<pre>
<b>ECMA Script</b>
넷스케이프가 인터넷 상의 다양한 스크립트 언어를 하나로 묶기 위해 제시한 표준안
</pre>
<pre>
<b>ES5</b>
1. 배열에 forEach, map, filter, reduce, some, every와 같은 메소드 지원
2. Object에 대한 getter/setter 지원
3. 자바스크립트 strict 모드 지원(좀 더 엄격한 문법 검사)
4. JSON 지원(과거에는 XML을 사용하다가, json이 뜨면서 지원하게 됨)
</pre>
<pre>
<b>ES6</b>
1. let, const 키워드 추가
2. arrow 문법 지원
3. iterator/gemerator 추가
4. module import/export 추가
5. promise 도입
</pre>
<pre>
<b>ES2016</b>
1. Array.prototype.includes()
2. 지수 연산자
</pre>
<pre>
<b>ES2017</b>
1. 문자열 패딩
2. Object.entries()와 Object.values()
3. Object.getOwnPropertyDescriptors()
4. Trailing Comma
5. Atomics, SharedArrayBuffer
</pre>

## 자바스크립트의 표준은 어떻게 제정될까요?
* ECMA라는 국제 표준 단체 내 표준별 Technical Committee(TC)39 위원회가 제정한다.

## 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
* 프로토타입(prototype) 기반의 객체 지향 스크립트 언어
* 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어
* 객체 지향 프로그래밍과 함수형 프로그래밍 모두 표현 가능

### Q. 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
* 반복문인 loop - while, for, do

## 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
* DOM 객체 CSS Class 선택
  * `document.querySelector`
  * `getElementsByClassName`
  * `document.querySelectorAll`
* DOM 객체 CSS Class 제거
  * `classList.remove`
  * `remove`

### Q. IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
* `html5shiv-printshiv.js`

## 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
* 지역 변수
  * 함수 내에서 선언된 변수
  * 선언된 함수 내에서만 유효하고, 함수가 종료되면 메모리에서 삭제됨.
* 전역 변수
  * 함수 외부에서 선언된 변수
  * 어느 영역에서나 접근이 가능하고, 웹페이지가 닫혀야 메모리에서 삭제됨.

### Q. `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
* `var`
  - 함수 레벨 스코프
  - 변수 선언 전에 값을 할당하고 출력이 가능
* `let`
  - 블록 레벨 스코프
  - 할당 된 값 재할당 가능

## 자바스크립트의 익명 함수는 무엇인가요?
* 함수명 대신 변수명에 함수 코드를 저장하는 구현방식
* 변수값을 변수에 넣는 형태

### Q. 자바스크립트의 Arrow function은 무엇일까요?
<pre>function 키워드 없이 =>를 이용해 함수를 생성하는 방법</pre>
* this나 super에 대한 바인딩이 없고, methods로 사용 불가
* new.target 키워드 X
* 일반적으로 스코프를 지정할때 사용하는 call, apply, bind, methods 이용 불가
* 생성자 사용 불가
* yield를 Arrow function 내부에서 사용 불가

## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?


