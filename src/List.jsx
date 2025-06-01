// functional componen example list

const List = ({ data }) => {
  return (
    <div>
      {data.map((item,index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
