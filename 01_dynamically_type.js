/*정적 타입(static/strong type) 언어 (C,C++,Java,Kotlin)등
변수를 선언할 때 테이터 타입 사전에 명시적 선언
타입 변경 불가, 컴파일 시점에 타입 체크 수행하는데 타입 일관성 덕에 런타임 에러 줄임*/

/*동적타입(dynamic/weak type) 언어(JavaScript, Python 등)
자바스크립트는 var,let,const 키워드를 사용해 변수를 선언할 뿐 데이터 타입을 사전에 선언x
동적 타입 언어는 할당에 의해 타입이 결정되는 것으로 재할당에 의해 변수 타입 변할수 있음
개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이
자동으로 변환되기도 하기 때문에 유연성은 높지만 신뢰성은 떨어짐*/

var test;
console.log(typeof test);

test=1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = {};
console.log(typeof test);

test=[];
console.log(typeof test);

test=function(){};      //자바에서 배웠던 메소드같은 존재라고 생각하면 편함
console.log(typeof test);

/* 
동적 타입 언어의 단점 보완을 위한 주의점
1. 변수는 꼭 필요할 때만 제한적으로
2. 변수의 유효범위인 scope를 최대한 좁게 만든다. 지역변수처럼...
3. 전역 변수 지양
4. 변수보다 상수를 사용해 값 변경 억제
5. 변수명을 통해 목적/의미 파악할 수 있게해야함
*/