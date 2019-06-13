function bai1() {
    let arr = [1,4,12,63,6,7,9,10,5,2];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 10){
            count++;
        }
    }
    document.write(`Có ${count} phần tử trong mảng >= 10`);
}

function bai2() {
    let arr = [1,10,23,2,5,4,3,8,9,7];
    let max = arr[0];
    let index = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        }
    }
    document.write(`Max = ${max} và ở vị trí thứ ${index} trong mảng`);
}

function bai3() {
    let arr = [1,10,23,2,5,4,3,8,9,7];
    let max = arr[0];
    let avg = 0;
    let sum = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / i;
    document.write(`Max = ${max} và AVG = ${avg}`);
}

function bai4() {
    let n = parseInt(prompt("Bạn muốn nhập bao nhiêu phần tử cho mảng : "));
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i+1}`));
    }
    document.write(`Mảng trước khi đảo ngược là : ${arr} <br/>`);
    let result = arr.reverse();
    document.write(`Mảng sau khi đảo ngược là : ${result}`);
}

function bai5() {
    let arr = [-1,2,3,4,-5];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    document.write(`Có ${count} số nguyên âm trong mảng`);
}

function bai6() {
    let arr = [];
    for(let i = 0; i < 10; i++){
        arr[i] = parseInt(prompt(`Nhập vào phần tử thứ ${i+1}`));
    }
    let V = parseInt(prompt(`Nhập số cần tìm : `));
    for (let i = 0; i < arr.length; i++){
        if(V === arr[i]){
            document.write(`${V} is in the array`);
            break;
        }else{
            document.write(`${V} is not in the array`);
            break;
        }
    }
}

function bai7() {
    let arr = [];
    for(let i = 0; i < 10; i++){
        arr[i] = parseInt(prompt(`Nhập vào phần tử thứ ${i+1}`));
    }
    document.write(`Mảng ban đầu là : [${arr}] <br/>`);
    let V = parseInt(prompt("Nhập vào phần tử cần tìm kiếm : "));
    let result = arr.includes(V);
    if(result === true){
        document.write(`phần tử ${V} có tồn tại trong mảng`);
        arr.shift();
        arr.push(0);
        document.write(`<br/> Mảng sau khi bị xóa phần tử đầu tiên và gán 0 cho phần tử cuối cùng là : ${arr}`);
    }else{
        document.write(`phần tử ${V} không tồn tại trong mảng`);
    }
}

function bai8() {
    let arr = [];
    for(let i = 0; i < 10; i++){
        arr[i] = parseInt(prompt(`Nhập vào phần tử thứ ${i+1}`));
    }
    let result = arr.sort(function (a,b){return b - a});
    document.write(`Mảng sau khi sắp xếp giảm dần là : ${result}`);
}

function bai9() {
    let arr1 = [];
    for(let i = 0; i < 10; i++){
        arr1[i] = parseInt(prompt(`Nhập vào phần tử thứ ${i+1}`));
    }

    let arr2 = [];
    for(let i = 0; i < 10; i++){
        arr2[i] = parseInt(prompt(`Nhập vào phần tử thứ ${i+1}`));
    }

    let join = arr1.concat(arr2);
    alert(join);
}