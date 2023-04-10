function getPaging(pg, totalCnt, pageGroupSize = 10) {
  /*                                 그룹번호
        1 2 3 4 5 6 7 8 9 10 1~10       1   1, 10
                            11~20       2   11, 20
                            21~17       3   21, 30
        전체페이지 개수, 어느 그룹에 속하는지 확인해야 한다

        (1-1)/10 * 10, (1-1)/10 * 10 = 0
        (2-1)/10 * 10, (2-1)/10 * 10 = 0 몫은 0
        (11-1)/10 * 10 = 10 
        (21-1)/10 * 10 = 20 
    */
  pnTotal = Math.ceil(totalCnt / 10); //전체 페이지(한페이지당 데이터가 10개일때 15건, 2페이지(강제올림))
  pgGroupStart = parseInt((pg - 1) / pageGroupSize) * pageGroupSize + 1;
  pgGroupEnd = pgGroupStart + 10;
  if (pgGroupEnd > pnTotal) {
    pgGroupEnd = pnTotal + 1;
  }
  console.log(pg, pgGroupStart, pgGroupEnd);
  //함수는 반환값이 하나이어야 한다. JSON 객체로 만들어 보내면 여러개 동시에 보낼 수 있음
  return { pnTotal: pnTotal, pnStart: pgGroupStart, pnEnd: pgGroupEnd, pg: pg };
}
/* 
for (i = 1; i <= 32; i++) {
  getPaging(i, 320);
}
 */

exports.getPaging = getPaging;
