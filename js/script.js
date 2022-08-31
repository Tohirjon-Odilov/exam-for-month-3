/***************
 *  MASALA 1 *
 ***************/

// let arr = ["I", "study", "Javascript", "right", "now"]

// arr.splice(2,1)

// console.log(arr)

/************
 * MASALA 2 *
 ************/

function reverceStr(str){
  let newStr = str.split("").reverse()
  let rever =  newStr.join('')

  return console.log(rever);
}
reverceStr("salom dunyo")

/************
 * MASALA 3 *
 ************/

let num = 5;

function numer(a){
  Number(a)
  if(a % 2 === 0){
    console.log(true);
  }else{
    console.log(false)
  }

  return a
}

numer(2)

