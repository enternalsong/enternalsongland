
var map = L.map('map', {
    center: [22.604799,120.2976256],
    zoom: 16
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var blackIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var data = [
  {'name':'軟體園區',lat:22.604799,lng:120.2976256},
  {'name':'ikea',lat:22.6066728,lng:120.3015429}
]
//新增一個圖層放icon的組
var markers=new L.MarkerClusterGroup().addTo(map);
//在該圖層放上icon
for(let i =0;data.length>i;i++){
  console.log(data[i].name);
  
  markers.addLayer(L.marker([data[i].lat,data[i].lng], {icon: greenIcon}));
   // .bindPopup('<h1>'+ data[i].name //+'</h1>')
}
//import data 
var xhr = new XMLHttpRequest();
//我準備要跟某伺服器，要藥局的資料
xhr.open("get","https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json");
//執行要資料的動作
xhr.send();
//資料回傳，才會觸發以下的語法
xhr.onload = function(){
  //string轉成物件陣列的json格式
 var data = JSON.parse(xhr.responseText).features;
 //用迴圈把資料給到進去
  for(let i =0;data.length>i;i++){
   var mask;
    if (data[i].properties.mask_adult==0){mask=blackIcon;}
    else{mask=greenIcon;}     markers.addLayer(L.marker([data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]], {icon: mask}).bindPopup('<h1>'+data[i].properties.name+'</h1>'));
// add more markers here...
  // L.marker().addTo(map)
  //   )
 }
 map.addLayer(markers);
}
