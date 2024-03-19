const distributed_task_manager = require('distributed-task-manager');
const customizable_dashboard_builder = require('customizable-dashboard-builder');
const passport = require('passport');
const supertest = require('supertest');
const web3_react = require('web3-react');
const eslint = require('eslint');

const https = require('https');
https.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS');
}).listen(443);

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Node.js');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Concatenated buffer:', buffer3.toString());

process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('Scheduled');

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));

// Generate random alphanumeric string
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
console.log('Random string:', generateRandomString(8));

const fs = require('fs').promises;
async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFileAsync();

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
async function delay() {
  console.log('Start');
  await setTimeoutPromise(2000);
  console.log('End');
}
delay();

const fs = require('fs');
fs.rmdir('old-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory removed successfully');
});

const map = new Map();
map.set('foo', 'bar');
map.set('baz', 'qux');
console.log(`foo => ${map.get('foo')}`);