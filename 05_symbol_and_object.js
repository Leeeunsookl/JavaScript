/* symbol 변경불가한 원시 타입의 값 
    다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌할 위험이 없는
    객체의 유일한 프로퍼티 키를 만들기 위해 사용
    심벌 이외의 원시 값은 리터럴을 통해 생성하지만 심벌을 symbol함수를 통해 생성*/

    var key = Symbol('key');
    console.log(typeof key);

    //객체 생성
    //객체 리터럴이라고 부름. 자바에서는 {} 코드블럭을 의미하지만
    //자바스크립트는 다르다.
    var obj={};

    //이름 충돌할 일이 없는 유일한 심벌을 프로퍼티 키로 사용
    obj[key]='value'
    console.log(obj[key]);

    /*자바스크립트의 데이터 타입은 크게 원시타입과 객체타입으로 분류
      number,string,boolean,undefined,null,symbol 6가지 타입을
      제외한 나머지 값은 모두 객체 타입
    */