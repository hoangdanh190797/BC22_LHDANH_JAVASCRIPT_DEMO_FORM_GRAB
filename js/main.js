//GrabX
const GRABX_1 = 8000;
const GRABX_2 = 7500;
const GRABX_3 = 7000;
const GRABX_WAIT = 2000;

//GrabSUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

//GrabBLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

//Monney
var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;
var tienCho = 0;

document.getElementById("btnTinhtien").onclick = function () {
  var so_Km = +document.getElementById("so_Km").value;
  var thoi_Gian = +document.getElementById("thoi_Gian").value;

  var loaiXe = layLoaixe();

//   if (loaiXe === "grabX") {
//   } else if (loaiXe === "grabSUV") {
//   } else if (loaiXe === "grabBLACK") {}

    switch (loaiXe) {
        case "grabX":
            var tongTT = tinhTienchiTiet(so_Km, thoi_Gian, GRABX_WAIT, GRABX_1, GRABX_2, GRABX_3);
            console.log(tongTT);
            break;

        case "grabSUV":
            var tongTT = tinhTienchiTiet(so_Km, thoi_Gian, GRAB_SUV_WAIT, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3);
            console.log(tongTT);
            break;

        case "grabBLACK":
            var tongTT = tinhTienchiTiet(so_Km, thoi_Gian, GRAB_BLACK_WAIT, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3);
            console.log(tongTT);
            break;
        default:
            alert("Vui lòng chọn loại xe");
            break;
    }

    //In kết quả ra
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTT;    
};
function layLoaixe() {
  var grab_X = document.getElementById("grabX");
  var grab_SUV = document.getElementById("grabSUV");
  var grab_BLACK = document.getElementById("grabBlack");
  var loaiXe = "";

  if (grab_X.checked) {
    loaiXe = "grabX";
  } else if (grab_SUV.checked) {
    loaiXe = "grabSUV";
  } else if (grab_BLACK.checked) {
    loaiXe = "grabBLACK";
  }
  return loaiXe;
}
function tinhTiencho(thoi_Gian, gia_Cho) {
    var kq = 0;
    if(thoi_Gian >= 3)
    {
        kq = Math.floor(thoi_Gian / 3) * gia_Cho;
    }
    return kq;
}
function tinhKM_1(soKm, giaKm) {
    var kq = soKm * giaKm;
    return kq;
}
function tinhKM_2(soKm, giaKm) {
    var kq = (soKm - 1)*giaKm;
    return kq;
}
function tinhKM_3(soKm, giaKm) {
    var kq = (soKm - 19)*giaKm
    return kq;
}
function tinhTienchiTiet(so_Km, thoi_Gian, gia_Cho, gia_Km_1, gia_Km_2, gia_Km_3) {
    tienCho = tinhTiencho(thoi_Gian, gia_Cho);
    if (0 <= so_Km && so_Km <= 1) {
        tienKm_1 = tinhKM_1(so_Km, gia_Km_1);
        tongTien = tienKm_1 + tienCho;
    }
    else if(1 < so_Km && so_Km <= 19)
    {
        tienKm_1 = tinhKM_1(1, gia_Km_1);
        tienKm_2 = tinhKM_2(so_Km, gia_Km_2);
        tongTien = tienKm_1 + tienKm_2 + tienCho;
    }
    else if(so_Km > 19)
    {
        tienKm_1 = tinhKM_1(1, gia_Km_1);
        tienKm_2 = tinhKM_2(19, gia_Km_2);
        tienKm_3 = tinhKM_3(so_Km, gia_Km_3);
        tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
    }
    return tongTien;
}

document.getElementById("btnInhoaDon").onclick = function () {
    var content = "";
    var so_Km = +document.getElementById("so_Km").value;
    var thoi_Gian = +document.getElementById("thoi_Gian").value;
    if(0 < so_Km && so_Km <=1)
    {
        content += "<tr>";
        content +=      "<td>KM ĐẦU TIÊN</td>";
        content +=      "<td>"+ so_Km +"</td>";
        content +=      "<td>"+ GRABX_1 +"</td>";
        content +=      "<td>"+ tienKm_1 +"</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Thời gian chờ</td>";
        content +=      "<td>"+ thoi_Gian +"</td>";
        content +=      "<td>"+ GRABX_WAIT +"</td>";
        content +=      "<td>"+ tienCho +"</td>";
        content += "</tr>";

        content += "<tr>";
        content +=      "<td>Tong tien</td>";
        content +=      "<td>"+ tongTien +"</td>";
        content += "</tr>";
    }
    document.getElementById("tbody").innerHTML = content;
}

