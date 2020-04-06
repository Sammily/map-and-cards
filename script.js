/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Создание экземпляра карты
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Установка свойства geodata экземпляра карты
chart.geodata = am4geodata_worldLow;

// Установка проекции (типа) карты - Miller
chart.projection = new am4maps.projections.Miller();

// Создание map polygon series. (Зоны карты такие как страны, представлены объектом MapPolygonSeries)
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Установка свйства на true, загрузит данные для серии (как названия стран) из GeoJSON
polygonSeries.useGeodata = true;

// Настройка серии
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

// Можно include или exclude полигоны.  Например удалить Antarctica - AQ. Можно писать через запятую ["PT", "ES"]
//(обозначения из https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
polygonSeries.exclude = ["AQ"];

// Добавление серии линий
var lineSeries = chart.series.push(new am4maps.MapLineSeries());
lineSeries.mapLines.template.strokeWidth = 4;
lineSeries.mapLines.template.stroke = am4core.color("#e03e96");
lineSeries.mapLines.template.nonScalingStroke = true;

var line = lineSeries.mapLines.create();
line.multiGeoLine = [
  [
    { latitude: 41.3888, longitude: 2.159, title: "Barcelona" }, //Barcelona
    { latitude: 40.4165, longitude: -3.7026, title: "Madrid" }, //Madrid
    { latitude: 59.3326, longitude: 18.0649, title: "Stockholm" }, //Stockholm
    { latitude: 40.7143, longitude: -74.006, title: "New York" }, //New York
    { latitude: 67.5641, longitude: 33.4031, title: "Apatity" }, //Apatity
    { latitude: 59.9127, longitude: 10.7461, title: "Oslo" }, //Oslo
    { latitude: 52.5244, longitude: 13.4105, title: "Berlin" }, //Berlin
    { latitude: 51.51, longitude: -0.13, title: "London" } //London
  ]
];

//самолетик
/*
// Add a map object to line
var bullet = line.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;
bullet.width = 48;
bullet.height = 48;

var plane = bullet.createChild(am4core.Sprite);
plane.scale = 0.15;
plane.horizontalCenter = "middle";
plane.verticalCenter = "middle";
plane.path =
  "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
plane.fill = am4core.color("#3e96e0");
plane.strokeOpacity = 0;

function goPlane() {
  var from = bullet.position,
    to;
  if (from == 0) {
    to = 1;
    plane.rotation = 0;
  } else {
    to = 0;
    plane.rotation = 180;
  }

  var animation = bullet.animate(
    {
      from: from,
      to: to,
      property: "position"
    },
    5000,
    am4core.ease.sinInOut
  );
  animation.events.on("animationended", goPlane);
}

goPlane();
*/
// Создание серии изображений(точки)
var imageSeries = chart.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#FFFFFF");
circle.stroke = am4core.color("#e03e96");
circle.strokeWidth = 2;
circle.nonScaling = true;
circle.tooltipText = "{title}";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [
  { latitude: 41.3888, longitude: 2.159, title: "Barcelona" }, //Barcelona
  { latitude: 40.4165, longitude: -3.7026, title: "Madrid" }, //Madrid
  { latitude: 59.3326, longitude: 18.0649, title: "Stockholm" }, //Stockholm
  { latitude: 40.7143, longitude: -74.006, title: "New York" }, //New York
  { latitude: 67.5641, longitude: 33.4031, title: "Apatity" }, //Apatity
  { latitude: 59.9127, longitude: 10.7461, title: "Oslo" }, //Oslo
  { latitude: 52.5244, longitude: 13.4105, title: "Berlin" }, //Berlin
  { latitude: 51.51, longitude: -0.13, title: "London" } //London
];

import cards from "./cards.js";
//Собираем в массив все места прибытия
const createMass = (items, par) => {
  let mass = [];

  if (par === "to") {
    items.map(item => mass.push(item.to));
  }
  if (par === "from") {
    items.map(item => mass.push(item.from));
  }

  return mass;
};

const massTo = createMass(cards, "to");
const massFrom = createMass(cards, "from");

//Находим такой from которого нет в to - т.е. это начало пути
function diffMass(mass1, mass2) {
  return [...diff(mass1, mass2)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
let res = diffMass(massFrom, massTo);
console.log(res);

//Получаем индекс элемента начала пути
const indexN = massFrom.findIndex(zn => {
  return zn == res;
});
console.log(indexN);

//Даем обьектам свойство позиция, по которому после отсортируем карточки в цепочку
cards[indexN].position = 1;
//console.log(cards);

//Присваиваем каждому обьекту свойство позиции в цепочке
let indexTek = indexN; //индекс текущего элемента, изначально равен индексу первой карточки в цепочке
let i = 2; //номер позиции, изначально 2 т.к. 1 мы уже дали первой карточке в цепочке
let k; //хранит индекс следующего элемента в цепочке
for (let j = 0; j < cards.length; j++) {
  cards.forEach(zn => {
    if (zn.from === cards[indexTek].to) {
      k = cards.indexOf(zn);

      return (zn.position = i);
    }
  });
  i++;
  indexTek = k;
}

//Сортируем карточки в цепочку
const sortStart = items => {
  return items.sort((obj1, obj2) => {
    if (obj1.position < obj2.position) return -1;
    if (obj1.position > obj2.position) return 1;
    return 0;
  });
};

//Собираем карточки в массив строк
const ArrSt = items => {
  let str = "";
  let result = [];

  items.map(item => {
    str = `${item.position}. From ${item.from}, take ${item.type}`;

    if (item.number !== "") {
      str = str + ` ${item.number}`;
    }
    str = str + ` to ${item.to}.`;

    if (item.gate !== "") {
      str = str + ` Gate ${item.gate}.`;
    }

    if (item.seat !== "") {
      str = str + ` Seat ${item.seat}.`;
    } else {
      str = str + ` No seat assignment.`;
    }

    if (item.additional !== "") {
      str = str + ` ${item.additional}.`;
    }

    result.push(str);
  });

  return result;
};

const resultWay = ArrSt(sortStart(cards));

let way = document.getElementById("way");
way.innerHTML = resultWay.join("<br>");
