// functional component Card
import { useEffect, useState } from "react";

const Card = ({ title, description, image }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // componentDidMount
  useEffect(() => {
    console.log("did mount");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("did update");
  }, [count]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      alert("selamat jalan");
    };
  }, []);

  return (
    <div className="card">
      <img
        style={{ width: "200px", height: "200px" }}
        src={image}
        alt={title}
      />
      <h2>
        {title} {count}
      </h2>
      <button onClick={increment}>Increment</button>
      <p>{description}</p>
    </div>
  );
};

export default Card;
