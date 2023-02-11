import fetch from 'node-fetch';
import { createInterface } from 'readline';
import chalk from 'chalk';



const cyan = chalk.bold.cyan;

console.log(cyan(``));
console.log(cyan(`CLI ChatBot ChatGPT`));
console.log(cyan(`by Zexalryz`));
console.log(cyan(``));
console.log(cyan(``));


const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(cyan('Enter your Prompt : '), async (data) => {
    const url = 'http://localhost:5000/';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            prompt: data
        })
    };

    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
		res.status(500).send('Internal server error');
		res.status(429).send('too many requests');
    }
});

















