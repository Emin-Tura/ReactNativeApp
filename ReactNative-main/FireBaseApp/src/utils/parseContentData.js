export default function (data) {
  return Object.keys(data).map(key => {
    return {
      id: key,
      ...data[key],
    };
  }); //ben buraya nasil bir obje verirsem vereyim bunun keylerini bana array yapisinda return eder
}
