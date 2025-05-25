
const getID = (id) => {
  return document.getElementById(id);
};
let chuoiMangRong = [];
const getNumber = () => {
  let number = Number(getID("inputNum").value);
  let txtArray = getID("txtArray");
  chuoiMangRong.push(number);
  txtArray.innerHTML = chuoiMangRong.join(","); 
};
const sumPositive = () => {
  
  let txtSum = getID("txtSum");
  let count = 0;
  for (let i = 0; i < chuoiMangRong.length; i++) {
    let mount = chuoiMangRong[i];
    if (mount > 0) {
      count += mount;
    }
  }
  let rm = `
toatal:${count}
`;
  txtSum.innerHTML = rm;
};
const countPositive = () => {
  
  let txtCount = getID("txtCount");
  let coutn = 0;
  for (let i = 0; i < chuoiMangRong.length; i++) {
    if (Number.isInteger(chuoiMangRong[i])) {
      coutn++;
    }
  }
  let rs = `
total so duong: ${coutn}
`;
  txtCount.innerHTML = rs;
};
const findMin = () => {
  let txtMin = getID("txtMin");
  let min = chuoiMangRong[0];
  let index = 0;
  for (let i = 0; i < chuoiMangRong.length; i++) {
    let score = Number(chuoiMangRong[i]);
    if (min > score) {
      min = score;
      index = i;
    }
  }
  let rs = `
so nho nhat=${min}
`;
  txtMin.innerHTML = rs;
};
const nhoDuongNhat = () => {
  let number = getID("txtduongNhoNhat");

  let duong = null;
  for (let i = 0; i < chuoiMangRong.length; i++) {
    let score = Number(chuoiMangRong[i]);

    if (score > 0) {
      if (duong === null || score < duong) {
      duong=score;
      }
    }
  }
  if (duong === null) {
    number.innerHTML = `khong co so duong nao het`;
  } else {
    number.innerHTML = `so duong nho nhat la:${duong}`;
  }
};
const soChanCuoi=()=>{
let chanCuoi=null;
let number=getID("txtChanCuoiCung");
for(let i=chuoiMangRong.length-1;i>=0;i++){
let score=chuoiMangRong[i];
if(score%2===0){
chanCuoi=score;
break;
}
}
  number.innerHTML = `Số chẵn dương cuối cùng = ${chanCuoi !== null ? chanCuoi : 'Không có'}`;
}
const changePosition=()=>{
  let inputIndex1=Number(getID("inputIndex1").value);
  let inputIndex2=Number(getID("inputIndex2").value);
  let txtChangePos=getID("txtChangePos");
  let tem;
 if(inputIndex1>=0 && inputIndex1<chuoiMangRong.length && inputIndex2>=0 && inputIndex2<chuoiMangRong.length){
tem=chuoiMangRong[inputIndex1];
chuoiMangRong[inputIndex1]=chuoiMangRong[inputIndex2];
chuoiMangRong[inputIndex2]=tem;
 }
 txtChangePos.innerHTML=`${chuoiMangRong}`;
}
const xepTangDan=()=>{
  let txtSapXepTang=getID("txtSapXepTang");
  for(let i=0;i<chuoiMangRong.length-1;i++){
    for(let j=i+1;j<chuoiMangRong.length;j++){
      if(chuoiMangRong[i]>chuoiMangRong[j]){
        let temp=chuoiMangRong[i];
        chuoiMangRong[i]=chuoiMangRong[j];
        chuoiMangRong[j]=temp;
      }
    }
  }
  txtSapXepTang.innerHTML=chuoiMangRong.join(",");
}
const lastOffchan=()=>{
  let numberNTFrirth=getID("txtSoNguyenToDauTien");
  let vn="";
  const laSoNguyenTo=(n)=>{
if(n<2){
 return false;
}
for(let i=2;i<=Math.sqrt(n);i++){
  
  if(n%i===0){
  return false;
  }
}
 return true;
  };
  for(let i=0;i<chuoiMangRong.length;i++){
    let temp=chuoiMangRong[i];
    if(laSoNguyenTo(temp)){
        vn=`so nguyen to dau tien la:${temp}` ;
      break;
    }
  }
  if(vn==""){
    vn="khong co so nguyen to nao trong mang";
  }
  numberNTFrirth.innerHTML=vn;
}

const firthOffNguye=()=>{
  let txtDemSoNguye=getID("txtDemSoNguye");
  let count=0;
for( let i=0;i<chuoiMangRong.length;i++){
let temp=chuoiMangRong[i];
if(Number.isInteger(temp)){
count++;
}
}
txtDemSoNguye.innerHTML=`${count}`;
}
const soSanhLuongAD = () => {
  let txtSoSanhLuongAmDuong = getID("txtSoSanhLuongAmDuong");
  let rs = "";
  let countAm = 0; 
  let countDuong = 0; 
  
  for (let i = 0; i < chuoiMangRong.length; i++) {
    let temp = chuoiMangRong[i];
    if (temp < 0) {
      countAm++;
    } else if (temp > 0) { 
      countDuong++;
    }
  }
  
  
  if (countDuong > countAm) {
    rs = "Số dương > số âm";
  } else if (countDuong < countAm) {
    rs = "Số dương < số âm";
  } else {
    rs = "Số âm = số dương";
  }
  txtSoSanhLuongAmDuong.innerHTML = rs;
};