document.write('<p>This is "script.js".</p>');

var price= 12300;
document.write('<p>価格:'+price+'円</p>');
const tax=0.08;
price = price * (1+tax);
document.write('<p>税込み価格:'+price+'円</p>');

var num=12345;
document.write('<P>'+num+'は、');
if(num%2==0){
    document.write('偶数</p>');
}else{
    document.write('奇数</p>');
}

var month = 4;
var season;

switch(month){
    case 1:season='冬';break;
    case 2:season='冬';break;
    case 3:season='春';break;
    case 4:season='春';break;
    case 5:season='春';break;
    case 6:season='夏';break;
    case 7:season='夏';break;
    case 8:season='夏';break;
    case 9:season='秋';break;
    case 10:season='秋';break;
    case 11:season='秋';break;
    case 12:season='冬';break;
    default:season='????';
}

document.write('<p>'+month+'月は、'+season+'です。');

const max =12345;
var num0 =1;
total =0;

while(num0 <= max){
    total += num0;
    num0++;
}
document.write('<p>'+max+'までの合計は'+total+'です');

total=0;

for(var num=1;num<=max;num++){
    total+=num;
}
document.write('<p>'+max+'までの合計は'+total+'です');

function calc(max){
    total = 0;
    for(num=1;num<max;num++){
        total+=num;
    }
    return total;
}
for(var i =10 ; i<=10000;i=i*10){
document.write('<p>'+i+'までの合計は'+calc(i)+'です');
}

var arr=[12,345,67,89];
var answer=0;
for (i=0;i<4;i++){
    answer+=arr[i];
}
document.write('<p>合計は'+answer+'です');

total=0;
for(var n in arr){
    total+=arr[n];
}
document.write('<p>合計は'+total+'です');

