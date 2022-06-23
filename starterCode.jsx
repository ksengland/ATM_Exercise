
const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ["Deposit", "Withdrawal"];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit" onClick={handleSubmit}></input>
    </label>
  );
};

const Account = () => {
let deposit = 0; // state of this transaction
const [totalState, setTotalState] = React.useState(0);
const [isDeposit, setIsDeposit] = React.useState(true);

let status = `Account Balance $ ${totalState}`;
//console.log('Account Rendered with ${isDeposit}');
const handleChange = event => {
  console.log(`handleChange ${event.target.value}`);
  deposit = Number(event.target.value);
};
const handleSubmit = () => {
  let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
  if(newTotal < 0){
    alert(`Cannot withdraw more than current balance`)
  } else {
  setTotalState(newTotal);
  event.preventDefault();
  }
};
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={()=>setIsDeposit(true)}>Deposit</button>
      <button onClick={()=>setIsDeposit(false)}>Withdrawal</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
