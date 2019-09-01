'use strict';

QUnit.module('Тестируем функцию tree', function () {
  QUnit.test('Построение ёлочки идёт только при вводе целых чисел', function (assert) {
		assert.strictEqual(tree('aaa'), null);
    		assert.strictEqual(tree('a12a'), null);
		assert.strictEqual(tree('1.2'), null);
		assert.strictEqual(tree(1.2), null);
	});
  QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});
  
  QUnit.test('Ёлочка высотой 16', function (assert) {
		const expected =
			'              *              \n' +
			'             ***             \n' +
			'            *****            \n' +
			'           *******           \n' +
			'          *********          \n' +
			'         ***********         \n' +
			'        *************        \n' +
		      	'       ***************       \n' +
		      	'      *****************      \n' +
		      	'     *******************     \n' +
		      	'    *********************    \n' +
		      	'   ***********************   \n' +
		      	'  *************************  \n' +
		      	' *************************** \n' +
		      	'*****************************\n' +
		      	'              |              \n';
		assert.strictEqual(tree(16), expected);
		assert.strictEqual(tree('16'), expected);
	});
});
