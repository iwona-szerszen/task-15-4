{
	process.stdin.setEncoding('utf-8');

	const multiply = (a = 1, b = 1) => a * b;

	const average = (...args) => {
		let sum = 0;
		args.forEach(arg => sum += arg);
		return (sum / args.length);
	};

	const task1 = () => {
		const hello = 'Hello';
		const world = 'World';

		console.log(`\nTask 1:\nThe welcome phrase is ${hello} ${world}!`);		
	};

	const task2 = () => {
		console.log('\nTask 2:\nEnter first number:');
		process.stdin.pause();
		process.stdin.on('data', () => {
			const firstNumber = process.stdin.read();
			console.log('Enter second number:');
			process.stdin.on('data', () => {
				const secondNumber = process.stdin.read();
				process.stdin.pause();
				console.log(`The result of multiplying is ${multiply(firstNumber, secondNumber)}`);
			});
		});
	};

	const task3 = () => {
		console.log('\nTask 3:\nEnter number of arguments for which arithmetic average will be calculated:');
		process.stdin.on('data', () => {
			const args = [];
			const argumentsNumber = process.stdin.read();
			for (let i = 0; i < argumentsNumber; i++) {
				process.stdin('data', () => {
					console.log(`Enter ${i + 1}-nthy argument:`);
					const arg = process.stdin.read();
					args.push(arg); 
				});			
			};
		});
		console.log(`\nThe arithmetic average of the following arguments: [${args}] is ${average(...args).toFixed(2)}.`);
	};

	const task4 = () => {
		const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
		console.log(`\nTask 4:\nThe arithmetic average of the following arguments: [${grades}] is ${average(...grades).toFixed(2)}.`);
	};

	const task5 = () => {
		const strangeDataStructure = [1, 4, 'Iwona', false, 'Nowak'];
		const [ , , firstName, , lastName] = strangeDataStructure;
		console.log(`\nTask 5:\nFirst name from the following data structure [1, 4, 'Iwona', false, 'Nowak'] is ${firstName} and the last name is ${lastName}.`);
	};
	
	const start = () => {
		console.log('\nChoose which task do you want to run (enter from t1 to t5) or enter \'exit\' to close the App:');
		process.stdin.on('readable', () => {
			const input = process.stdin.read();

			if (input !== null) {
				let instruction = input.toString().trim();

				switch(instruction) {
					case 't1': 
						task1();
						break;
					case 't2':
						task2();
						break;
					case 't3':
						task3();
						break;
					case 't4':
						task4();
						break;
					case 't5':
						task5();
						break;
					case 'exit':
						console.log('Quitting app!');
						process.exit();
					default:
						console.log('Wrong intruction!');
				}
				start();
			}		
		});		
	};

	start();

}