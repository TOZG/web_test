/*
 *一些小工具的实现
 * 20200312
 */

//求和
function getSum(start, len) 
{
	var sum = 0;
	for (var i = start; i <= len; i++) {
		sum += i;
	}
	console.log(sum);
}

//求最大值
function getMax(arr) 
{
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		} 
	}
	return max;
}

//求最大值
function getMin(arr) 
{
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		} 
	}
	return min;
}

// 阶乘
function getFactorial(n) 
{
	var result = 1;
	for (var i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}

// n个阶乘的和
function getFactorialSum(n) 
{
	console.log(arguments);
	var result = 1;
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += getFactorial(i);
	}
	return sum;
}

//任意个数的最大值
function getNumMax() 
{
	var max = arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		if (max < arguments[i]) {
			max = arguments[i];
		}
	}
	return max;
}

//求斐波那契数列 1 1 2 3 5 8 13 21
function getFibonacci(number) 
{
	var num1 = 1;
	var num2 = 1;
	var num3;
	for (var i = 2; i < number; i++) {
		num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
	}
	return num3;
}

//冒泡排序
function getBubblingSort(arr) 
{
	var temp;
	for (var i = 0; i < arr.length - 1; i++) {
		var isSort = true;
		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				isSort = false;
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		if (isSort) {
			break;
		}
	}
}

/*20200313*/
//自调用函数
(function() 
{
	console.log('我是自调用函数!\n');
})();  

//全局变量
// 1.函数外部
// 2.函数内部且不用var修饰,即str = 'abc';(不推介使用,知道就行)
//局部变量:只定义在函数内部的变量
//ECMAScript中没有块级作用域

//预解析
// 1.变量提升,把变量声明提升到当前作用域的最上面,不包括变量赋值
// 2.函数提升,把函数声明提升到当前作用域的最上面,不包括函数调用
// 在预解析的过程中如果函数与变量同名,函数优先

var a = b = c = 9;
拆分:var a = 9; b = 9; c = 9;


//创建对象的方法
// 1.对象字面量
var hero = {
	name: '黄忠',
	weapon: '弓箭',
	equipment: ['头盔', '靴子', '铠甲'],
	blood: 100,
	attack: function () {
		console.log(this.name + ':射箭');
	},
	run: function () {
		console.log(this.name + ':跑路');
	}
}
console.log(hero.name);
console.log(hero.equipment);
hero.attack();
hero.run();

//2. new Object()
var hero = new Object();  //创建一个空的对象
hero.name = '吕布';
hero.weapon = '方天画戟';
hero.equipment = ['头盔', '靴子', '铠甲'];
hero.blood = 100;
hero.attack = function () {
	console.log(this.name + ':劈砍');
}
hero.run = function () {
	console.log(this.name + ':跑路');
}
console.log(hero.name);
console.log(hero.equipment);
hero.attack();
hero.run();

//3.工厂方法
function createHero(name, weapon, equipment, blood) 
{
	var hero = new Object();
	hero.name = name;
	hero.weapon = weapon;
	hero.equipment = equipment;
	hero.blood = blood;
	hero.attack = function() {
		console.log(this.name + ':攻击');
	}
	hero.run = function() {
		console.log(this.name + ':跑路');
	}
	return hero;
}
var hero1 = createHero('锦马超', '枪', ['头盔', '靴子', '铠甲'], 100);
var hero2 = createHero('刘备', '刀剑', ['头盔', '靴子', '铠甲'], 100);
console.log(hero1.name);
console.log(hero1.equipment);
hero1.attack();
hero1.run();

console.log(hero2.name);
console.log(hero2.equipment);
hero2.attack();
hero2.run();

//4.自定义创建构造函数,一般构造函数使用帕斯卡命名,即第一个单词大写
function Hero(name, weapon, equipment, blood)
{
	this.name = name;
	this.weapon = weapon;
	this.equipment = equipment;
	this.blood = blood;
	this.attack = function() {
		console.log(this.name + ':攻击');
	}
	this.run = function() {
		console.log(this.name + ':跑路');
	}
}
var hero1 = new Hero('锦马超', '枪', ['头盔', '靴子', '铠甲'], 100);
var hero2 = new Hero('刘备', '刀剑', ['头盔', '靴子', '铠甲'], 100);
console.log(hero1.name);
console.log(hero1.equipment);
hero1.attack();
hero1.run();

console.log(hero2.name);
console.log(hero2.equipment);
hero2.attack();
hero2.run();

//new关键字的执行过程
// 1.在内存中创建一个空对象
// 2.让构造函数中的this指向刚刚创建的对象
// 3.执行构造函数,在构造函数中设置属性和方法
// 4.返回当前对象

//this关键字
// 1.函数中的this
// this指向Window
// 2.方法中的this
// this指向这个方法所属的对象
// 3.构造函数中的this
// this就是构造函数创建的对象

//遍历与删除对象的属性,for in
var obj = {
	name: 'zhangsan',
	age: 18,
	sex: '男',
	sayHi: function() {
		console.log(this.name + ': 哈哈');
	}
}
for (var key in obj) {
	console.log(key + ':' + obj[key]);
}

//删除对象
// delete 

//20200318
/*
内置对象
查文档:MDN(包括HTML,CSS,万维网及HTML5应用的API)
网址:https://developer.mozilla.org/zh-CN/
通过查询MDN学习Math对象的random()方法的使用
Math对象提供一些与数学运算有关的方法
Math.PI:圆周率
Math.random():生成随机数
Math.floor()/Math.ceil():向下取整/向上取整
Math.round():取整四舍五入
Math.abs():绝对值
Math.max()/Math.min():求最大值和最小值
Math.sin()/Math.cos():正弦/余弦
Math.power()/Math.sqrt():求指数次幂/求平方根
*/
console.log(Math.PI);
console.log(Math.ceil(3.1));
console.log(Math.round(3.5));

//20200319


