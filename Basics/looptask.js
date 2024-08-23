let geoShape = [
  {
    length: 3,
    width: 4,
  },
  {
    length: 2,
  },
  {
    radius: 4,
  },
  {
    length: 3,
    width: 5,
  },
];
//geoshape[0].hasOwnProperty('radius');

// for (let i = 0; i < geoShape.length; i++) {
//   let aa = geoShape[i];
//   let hasLandW = geoshape[i].hasOwnProperty("radius" && "width");
//   if (hasLandW) {
//     aa.area = aa.length * aa.width;
//   }
//   let hasL = geoshape[i].hasOwnProperty("length");
//   if (hasL) {
//     aa.area = aa.length * aa.length;
//   }
//   let hasR = geoshape[i].hasOwnProperty("radius");

//   if (hasR) {
//     aa.area = 3.14 * aa.radius * aa.radius;
//   }
//   console.log(geoShape);
// }

for (shape of geoShape) {
  if (shape.hasOwnProperty("radius")) {
    shape.area = Math.PI * Math.pow(shape.radius, 2);
  } else if (!shape.hasOwnProperty("width")) {
    shape.area = Math.pow(shape.length, 2);
  } else {
    shape.area = shape.length * shape.width;
  }
  console.log(geoShape);
}
