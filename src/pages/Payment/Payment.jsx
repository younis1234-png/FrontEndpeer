import React from "react";
import "./Payment.scss";
import Footer from "../../components/UI/Footer/Footer";

const Payment = () => {
  return (
    <>
      <div className="payment">
        <h1 className="payment__title">Payment</h1>
        <div className="payment__top">
          <h1 className="payment__heading">1. Select your plan</h1>
          <div className="payment__topInput">
            <label>
              <input type="radio" name="basic" />
              BASIC
            </label>
            <label>
              <input type="radio" name="basic" />
              ADVANCED
            </label>
            <label>
              <input type="radio" name="basic" />
              PRO
            </label>
          </div>
        </div>
        <div className="payment__middle">
          <div className="payment__billingInfo">
            <h1>2. Billing Information </h1>
            <label>
              FULL NAME
              <input type="text" name="" id="" className="input__billing" />
            </label>
            <label>
              BILLING ADDRESS
              <input type="text" name="" id="" className="input__billing" />
            </label>
            <div className="payment__cityPostal">
              <label>
                CITY
                <input type="text" name="" id="" className="input__small" />
              </label>
              <label>
                POSTAL CODE
                <input type="text" name="" id="" className="input__small" />
              </label>
            </div>
            <label>
              COUNTRY
              <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </label>
          </div>
          <div className="payment__billingInfo">
            <h1>3. CREDIT CARD INFORMATION </h1>
            <label>
              CARDHOLDER'S NAME
              <input type="text" name="" id="" className="input__billing" />
            </label>
            <label>
              CARD NUMBER
              <input type="text" name="" id="" className="input__billing" />
            </label>
            <div className="payment__cityPostal">
              <label>
                EXPIRY MONTH
                <select name="" id=""></select>
              </label>
              <label>
                EXPIRY YEAR
                <select name="" id=""></select>
              </label>
            </div>
            <label>
              CVV
              <input type="text" name="" id="" className="input__billing" />
            </label>
          </div>
        </div>
        <div className="payment__bottom">
          <div className="payment__bottomTop">
            <p>By continuing, I acknowledge that I've read and agree</p>
            <p className="payment__paraContainer">
              to the{" "}
              <a classname="payment__link" href="">
                Terms of Service
              </a>{" "}
              &{" "}
              <a classname="payment__link" href="">
                Privacy Policy
              </a>
            </p>
          </div>
          <a href="#" className="pricing-btn" data-text="color">
            <span className="text-btn">DOWNLOAD</span>
          </a>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
