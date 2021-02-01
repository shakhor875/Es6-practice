// 2 ta array k akchatha dakhar niom

const ages = [12, 15, 18, 20, 30];
const ages2 =[17, 15, 16, 17];
const ages3 =[47, 35, 26, 57, 45];
const allAges = ages.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages,...ages2,5,...ages3];
console.log(allAges2);

// maximum tk bahir kora ki vabe

const business = 750;
const minister =550;
const sochib = 450;
// const maximum = Math.max(business,minister,sochib);
const takaPoisha = [650,550,450];
const maximum =Math.max(...takaPoisha);
console.log (maximum);