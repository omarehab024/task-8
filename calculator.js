
// الاله الحاسبه



let inputbutton = +prompt("ادخل الرقم");


function collect() {
  let collectbutton = +prompt("ادخل رقم الجمع");
  sumation =inputbutton + inputbutton;
  console.log(`ناتج الجمع هو ${sumation}`)
}

function limited() {
  let sub = +prompt("ادخل رقم الطرح");
  subvalue = inputbutton - sub;
  console.log(`ناتج الطرح هو ${subvalue}`)
}

function inc() {
  let font = +prompt("ادخل رقم الالضرب");
  fontvalue = font * inputbutton;
  console.log(` ناتج الضرب هو ${fontvalue}`)
}
function ens() {
 let ad = +prompt("ادخل رقم القسمه");
  advalue = inputbutton / ad;
  console.log(` ناتج القسمه هو${advalue}`)
}

