function Cal() {
  return (
    <div>
      <h1 className="title">성적계산기</h1>
      <div>
        <form type="submit">
          이름 : <input type="text" name="name"></input>
          <br />
          국어 : <input type="number" name="kor"></input>
          <br />
          수학 : <input type="number" name="math"></input>
          <br />
          영어 : <input type="number" name="en"></input>
          <br />
          <button>결과확인</button>
        </form>
      </div>
    </div>
  );
}

export default Cal;
