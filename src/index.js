import { DateTime } from 'luxon';
import '@styles/main.css';
import '@styles/vars.styl';

const name = process.env.NAME;
const fecha = DateTime.now().plus({ days: 6,});

console.log(fecha.toLocaleString())
console.log(name)
