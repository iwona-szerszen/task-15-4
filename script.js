const readline = require('readline');

process.stdin.setEncoding('utf-8');

const readlineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const runTask = task => new Promise((resolve, reject) => task(resolve, reject)).then(start);

const multiply = (a = 1, b = 1) => a * b;

const average = (...args) => {
	let sum = 0;
	args.forEach(arg => sum += Number(arg));
	return (sum / args.length);
};

const task1 = (resolve, reject) => {
	const hello = 'Hello';
	const world = 'World';

	console.log(`\nTask 1:\nThe welcome phrase is ${hello} ${world}!`);
	resolve();	
};

const task2 = (resolve, reject) => {
	let firstNumber, secondNumber;

	readlineInterface.question('\nTask 2:\nEnter first number: ', answer => {
		firstNumber = answer;
		if (!firstNumber) {
			firstNumber = undefined;
		}
			readlineInterface.question('Enter second number: ', answer => {
			secondNumber = answer;
			if (!secondNumber) {
				secondNumber = undefined
			}
			console.log(`The result of multiplying is ${multiply(firstNumber, secondNumber)}.`);
			resolve();
		});
	});
};


const task3 = (resolve, reject) => {
	readlineInterface.question('\nTask 3:\nEnter arguments (separated by spaces) for which arithmetic average will be calculated: ', answer => {
		const args = answer.split(' ');
		console.log(`\nThe arithmetic average of the following arguments: [${args}] is ${average(...args).toFixed(2)}.`);
		resolve();
	});
};

const task4 = (resolve, reject) => {
	const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
	console.log(`\nTask 4:\nThe arithmetic average of the following arguments: [${grades}] is ${average(...grades).toFixed(2)}.`);
	resolve();
};

const task5 = (resolve, reject) => {
	const strangeDataStructure = [1, 4, 'Iwona', false, 'Nowak'];
	const [ , , firstName, , lastName] = strangeDataStructure;
	console.log(`\nTask 5:\nFirst name from the following data structure [1, 4, 'Iwona', false, 'Nowak'] is ${firstName} and the last name is ${lastName}.`);
	resolve();
};

const start = () => {
	console.log('\nChoose which task do you want to run (enter from t1 to t5) or enter \'exit\' to close the App:');
};

readlineInterface.on('line', line => {
	switch(line) {
		case 't1':
			runTask(task1);
			break;
		case 't2':
			runTask(task2);
			break;
		case 't3':
			runTask(task3);
			break;
		case 't4':
			runTask(task4);
			break;
		case  't5':
			runTask(task5);
			break;
		case 'exit':
			console.log('Quitting app!');
			process.exit();
		default:
			console.log('Wrong intruction!');
	}
});	

start();