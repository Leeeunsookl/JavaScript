

//일반 문자열 내에서는 줄바꿈이 허용 되지 않는다
// var srt='안녕하세요 
// 누구누구입니다';

var str = '안녕하세요\n 반갑습니다';
console.log(str);

//``(백틱)으로 텍스트를 감쌈
var multiline=`안녕하세요
반갑습니다.`;
console.log(multiline);

var lastName = '조';
var firstName = '평훈';

console.log('제 이름은' + lastName +firstName + ' 입니다.');