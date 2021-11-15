import React from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { insertBuy } from "../../../api";

const Form1 = () =>{
    const [values,setValues] = useState({
        currency: "",
        totalAmount :"",
        token : "",
        bscWaltetAddress : "",
        transactionHashNumber: "",
        telegramHandle : "",

    });

    const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name] : e.target.value,
        })
      }

      const handleReset = (e) => {
       
      } 
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(values.currency != "" && values.telegramHandle!= "" && values.token!= "" && values.totalAmount!= "" && values.transactionHashNumber!= ""){
        insertBuy (values)
          .then(response => {
            if(response.status === 200){
                alert("submitted");
                window.location.reload();
            }
            
          })
          .catch(err => alert("Something Went Wrong"));
        }else{
            alert("Fill up the Form");
        }
      }

    return(
        <div className="container-fluid" style={{backgroundColor: "#ffffff"}}>
            <br/> <br/> <br/>
            <div className="container">
            <p className="buyPageForminfo">Please provide necessary information to claim your <b>Impact Token.</b></p>
            <form >
                <div className="row">
                    <div className="col">
                    <p className="pformBuy">Currency</p>
                            <select  onChange={handleChange} name="currency" className="form-control">
                                <option value="">BNB/BUSD</option>
                                <option value="BNB">BNB</option>
                                <option value="BUSD">BUSD</option>
                            </select>
                       
                    </div>
                    <div className="col">
                    <p className="pformBuy">Total Amount</p>
                    <input type="text" onChange={handleChange} name="totalAmount" className="form-control" placeholder="0.1BNB/10BUSD"/>
                    </div>
                    
                </div>
                <div className="col">
                    <p className="pformBuy">Number of Impact token</p>
                        <input type="text" name="token" onChange={handleChange} className="form-control" placeholder="Number of Impact token"/>
                </div>

                <div className="col">
                    <p className="pformBuy">Your BSC wallet address (Make sure you are sending from the same wallet)</p>
                        <input name="bscWaltetAddress" onChange={handleChange} type="text" className="form-control"/>
                </div>

                <div className="col">
                    <p className="pformBuy">Transaction hash number(i)</p>
                        <input name="transactionHashNumber" onChange={handleChange} type="text" className="form-control"/>
                </div>

                <div className="col">
                    <p className="pformBuy">Your Telegram handle (In case of an error)</p>
                        <input name="telegramHandle" onChange={handleChange} type="text" className="form-control"/>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                         <button style={{marginBottom: "20px"}} type="submit" onClick={handleReset} className="buyresetbtn">Reset</button>
                     </div>
                     <div className="col-lg-6 col-md-12 col-sm-12">
                         <button onClick={handleSubmit} type="submit" className="buySubmitbtn">Submit</button>
                     </div>
                </div>
            </form>
            <br/>
            </div>
        </div>
    )
}

export default Form1;