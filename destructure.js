const person = {name: 'habo mia', age : 55,  job: 'actors', gfName : 'nargis faqri', phone: 01721584569, address: 'kaliakior',friend:['rohim','korim','soboj','hablo'] }
// const gfName = person.gfName;
// const phone =person.phone;
// console.log(gfName , phone);
// const {phone,gfName,name,salary} = person;
// console.log(phone,gfName,name , salary);

// const friends=['sakib khan','salman khan','amir khan','sharok khan','dildar'];
// const [friend,...othersFriend]= friends;
// console.log (othersFriend);
const complexObject = {
    name : 'abc',
    info :{
        address : "kola bagan",
        leader : "lion"
    }
}
const {leader} = complexObject.info;
console.log(leader);