import { useState } from "react";

const Jumbotron = () => {
  const dataList = ["apel","mangga","durian","alpukat"];
  // push itu nambah di akhir
  dataList.push('salak');
  // hapus di akhir
  dataList.pop();
  // nambah di awal
  dataList.unshift('strawberry');
  return (
    <div
      className="jumbotron"
      style={{
        width: "500px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h1 className="display-4">Album example</h1>
      <p className="lead">
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks don't
        simply skip over it entirely.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Call to action!
      </a>
      <ol>
      {dataList.map((item, index) => {
        return <li key={index}>{item}</li> 
      })}
      </ol>
    </div>
  );
};

export default Jumbotron;
