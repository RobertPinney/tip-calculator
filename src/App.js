import { useState } from "react";
import "./app.css";

export default function App() {
  const [bill, setBill] = useState(0);

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service bill={bill} />
      <Output bill={bill} />
      <Reset />
    </div>
  );
}

This is a test

function Bill({ bill, setBill }) {
  return (
    <span className="bill">
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
    </span>
  );
}

function Service({ bill }) {
  const [myService, setMyService] = useState(0);

  function handleService() {
    myService({ bill });
  }

  return (
    <div>
      <span className="service">
        <p>How did you like the service?</p>
        <select>
          <option onSelect={handleService}>Dissatisfied (0%)</option>
          <option onSelect={() => setMyService({ bill })}>
            It was okay (5%)
          </option>
          <option onSelect={handleService}>It was good (10%)</option>
          <option onSelect={handleService}>Absolutely amazing! (20%)</option>
        </select>
      </span>
      <span className="service">
        <p>How did your friend like the service?</p>
        <select>
          <option>Dissatisfied (0%)</option>
          <option>It was okay (5%)</option>
          <option>It was good (10%)</option>
          <option>Absolutely amazing! (20%)</option>
        </select>
      </span>
      {console.log(myService)}
    </div>
  );
}

function Output({ bill }) {
  return (
    <div>
      <p>{`You pay $${bill} ($${bill} + $tip)`}</p>
    </div>
  );
}

function Reset() {
  return <div>Reset</div>;
}
