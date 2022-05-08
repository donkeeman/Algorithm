class Wizard{
	// c++ 생성자처럼 클래스 이름으로 생성자를 만들지 않는다
	// 클래스 이름 대신 constructor(parameter)로 생성자 작성
	// 미리 변수를 선언하지 않아도 생성됨
	constructor(health, mana, armor){
		this.health = health;
		this.mana = mana;
		this.armor = armor;
	}
	
	// 함수명 앞에는 리턴 타입을 붙이지 않음
	attack(){
		console.log("파이어볼");
	}
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();