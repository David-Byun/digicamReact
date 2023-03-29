s.map((item) => {
  item.total = item.kor + item.mat + item.eng;
  item.avg = item.total / 3;
  return item;
}).forEach((item) => {
  console.log(`${item.name} ${item.total} ${item.avg}`);
});
