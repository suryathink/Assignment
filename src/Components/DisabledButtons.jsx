import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import React, { useEffect, useState } from "react";
import CustomSelect from "./Custom";
import axios from "axios";


function FormDisabledExample() {
  const [currentValue, setCurrentValue] = useState(0);
  const [coinname, setCoinname] = useState("");
  const [currentCoinPrice, setCurrentCoinPrice] = useState(0);
  const [amountYouWantToInvest, setAmountYouWantToInvest] = useState();
  const [coins, setCoins] = useState();
  
  
   const obj = {
    ethereum:"ETH",
    bitcoin:"BTC",
   'matic-network':"MATIC",
    binancecoin:"BNB",
    ripple:"XRP",
    solana:"SOL"
   }
 
  const options = [
    { value: "ethereum", label: "Ethereum" },
    { value: "bitcoin", label: "Bitcoin" },
    { value: "matic-network", label: "Matic" },
    { value: "binancecoin", label: "Binance" },
    { value: "ripple", label: "XRP" },
    { value: "solana", label: "Solana" },
  ];

  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  async function getData(coinname) {
    try {
      const response = await axios.request(
        // `https://api.coingecko.com/api/v3/coins/${coinname}`
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinname}&vs_currencies=inr`
      );
      // const response = await axios.request(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
      // setCurrentCoinPrice("");
      // console.log(response.data[coinname]);
      let x = response.data[coinname];
      setCurrentCoinPrice(x.inr);
      setCurrentValue(x.inr)
      // setCurrentCoinPrice(response.data[coinname])
    } catch (error) {
      console.error(error);
    }
  }
  console.log("currentCoinPrice",currentCoinPrice);
      console.log("amountYouWantToInvest",amountYouWantToInvest);
  console.log("current price of selected crypto", currentCoinPrice);

  const handleChange = (option) => {
    // console.log("consoling option",option)
    setCoinname(option.value);
  };

  let amountToInvest = (e)=>{
    let a = e.target.value
    // console.log("66",a/currentCoinPrice);
    let cryptoUnit = Number(a/currentCoinPrice);
    // console.log("cryptoUnit",cryptoUnit)
    // console.log("coins",coins)
    setAmountYouWantToInvest(Number(a));
    setCoins(cryptoUnit);
  }

  useEffect(() => {
    getData(coinname);
    // console.log("obj",obj[coinname])
  }, [coinname]);

  return (
    <div className="Box">
      <Form className=".App">
        <fieldset>
          <Form.Group className="mb-3">
            <br />
            <br />
            <div id="currentValue">
              <div> Current Value </div>
              <div>₹ {currentValue} </div>
            </div>
            <Form.Label htmlFor="disabledSelect"></Form.Label>
            <br />

            <CustomSelect
              onChange={handleChange}
              placeholder="Select option"
              options={options}
              isSearchable
            />
          </Form.Group>

          <Form.Group  className="mb-3">
            <Form.Label htmlFor="disabledTextInput">
              Amount you want to invest
            </Form.Label>
            <div style={{display:"flex",position:"relative",justifyContent:"space-between",alignItems:"center",border:"1px solid #d3caca"}}>
            <Form.Control style={{border:"none",outline:"none",boxShadow:"none"}} id="disabledTextInput" placeholder="0.00" value={amountYouWantToInvest} onChange={amountToInvest} />
              <p style={{verticalAlign:"center", position:"absolute",right:3,top:"10%"}}> INR</p>
            </div>
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">
             { `Estimate Number of ${coinname.length==0 ? "Coin" : obj[coinname]} you will get`}
            </Form.Label>
            <Form.Control id="disabledTextInput" placeholder="0.00" value={coins} disabled ={ amountYouWantToInvest > 0 ? false: true} />
          </Form.Group>
        
          <Button style={{width:"100%",borderRadius:"25px"}} size="lg" type="submit">Buy</Button>

   

        </fieldset>
      </Form>
    </div>
  );
}

export default FormDisabledExample;
