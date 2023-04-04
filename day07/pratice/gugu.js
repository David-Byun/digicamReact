var express = require('express');
var app = express(); //서버

app.get('/gugu', (req, res) => {
  let dan = req.query.dan;
  let result = '';
  for (i = 1; i < 10; i++) {
    result += `${dan} * ${i} = ${dan * i}<br />`;
  }
  console.log(result);
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end(result);
});
//http://127.0.0.1:4001/gugu?dan=4

//http://127.0.0.1:4001/gugu/4
app.get('/gugu/:dan', (req, res) => {
  let dan = req.params.dan; //url에 따라서 :dan
  let result = '';
  for (i = 1; i < 10; i++) {
    result += `${dan} * ${i} = ${dan * i}<br />`;
  }
  console.log(result);
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end(result);
});

app.listen(4001, (req, res) => {
  console.log('server start http://127.0.0.1:4001');
});

//get 방식의 경우 ?x=4&y=5 request.query.x
//get 방식의 경우 /4/5 request.params.x
//post 방식의 경우 app.use(express.urlencoded({ extended: false })) 먼저 선언되어야 한다.
//가 선행되고 나면 request.body.x로 처리한다.
function deleteCartAll() {
  $.ajax({
    url: '/api/cart',
    type: 'delete',
  })
    .done(function () {
      cartReset();
    })
    .fail(function () {
      alert('에러가 발생');
    });
}

function rab() {
  $.ajax({
    url: '/api/cart',
    type: 'get',
  }).done(function (result) {
    if ((result = '')) {
      return;
    }
  });
}

function addCart() {
  $("input[name='option']:checked").each(() => {
    const optionName = $(this).val();
    const optionId = $(this).siblings('.option_id').val();

    $('.order_btn').attr('disabled', false);
  });
}
