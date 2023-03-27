function Content({ data }) {
  return (
    <div>
      {data.map((a, i) => (
        <div key={i}>
          <div>{a.id}</div>
          <div>{a.area_nm}</div>
          <div>{a.desc}</div>
          <div>{a.ctprvnnm}</div>
          <div>{a.signgunm}</div>
        </div>
      ))}
    </div>
  );
}

export default Content;
