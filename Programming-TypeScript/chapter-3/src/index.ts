// 3.1 예제 코드
// 1. squareOf의 매개변수 n은 number로 제한된다.
// 2. 2 값은 number에 할당할 수 있는(호환되는) 타임이다.
function squareOf(n: number) {
  return n * n;
}
squareOf(2); // result : 4
// squareOf('z') // 에러 TS2345: Argument of type '"z"' is not assignable to parameter of type 'number'.

// 3.2.1 예제 코드
// any 타입은 모든 타입의 값을 할당할 수 있다.
// TSC 플래그 noImplicitAny를 사용하면 any 타입을 명시적으로 선언하지 않으면 에러가 발생한다.
let a: any = 666;
let b: any = ['danger'];
let c = a + b;
console.log(c); // result : 666danger

// 3.2.2 예제 코드
// unknown 타입은 any 타입과 같이 모든 타입의 값을 할당할 수 있다.
// 하지만 unknown 타입은 any 타입과 달리 타입 호환성이 적용된다.
let a1: unknown = 30;
let b1 = a1 === 123; // result : false
// let c1 = a1 + 10 // result : 에러 TS2571: Object is of type 'unknown'.
if (typeof a1 === 'number') {
  let d = a1 + 10; // result : number
}

// 3.2.3 예제 코드
// boolean 타입은 true 또는 false 값만 할당할 수 있다.
// 1. 어떤 값이 boolean인지 타입스크립트가 추론하게 한다(a2,b2)
// 2. 어떤 값이 특정 boolean 값인지 타입스크립트가 추론하게 한다(c2)
// 3. boolean 타입을 명시적으로 선언한다(d2)
// 4. 값이 특정 boolean임을 명시적으로 타입스크립트에 알린다(e2,f2)
let a2 = true; // result : boolean
var b2 = false; // result : boolean
const c2 = true; // result : true
let d2: boolean = true; // result : boolean
let e2: true = true; // result : true , 타입 리터럴 : 오직 하나의 값을 나타내는 타입
// let f2: true = false // result : 에러 TS2322: Type 'false' is not assignable to type 'true'.
