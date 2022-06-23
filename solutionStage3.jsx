const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Making a Deposit", "Withdrawing an Amount"];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input id="number" type="number" width="200" onChange={onChange}></input>
      <input id="submit" type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };
  const handleSubmit = () => {
    let previousTotal = totalState
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
  if(newTotal <= 0){
    alert(`Error: Cannot withdraw more than current balance!`);
  } else {
  setTotalState(newTotal);
  event.preventDefault();
  }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button id="deposit" onClick={() => setIsDeposit(true)}>Deposit</button>
      <button id="withdrawal" onClick={() => setIsDeposit(false)}>Withdrawal</button><br></br>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
