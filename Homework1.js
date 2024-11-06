// Решение системы линейных уравнений методом Крамера
// Коэффициенты
const n1 = 3;
const n2 = 6;
const n3 = 9;
const n4 = 12;
const n5 = 15;
const n6 = 18;

const D = n1 * n5 - n2 * n4; //Основной определитель

const xD = n3 * n5 - n2* n6; //Определитель для x

const yD = n1 * n6 - n3 * n4; // Определитель для y

const x = xD / D;
const  y = yD / D;

D === 0 ? console.log('Система не имеет единственного решения') : console.log('x = ', x, 'y = ', y);
