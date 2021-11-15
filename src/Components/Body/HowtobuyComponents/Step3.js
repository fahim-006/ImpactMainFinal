import step3 from '../../../images/step3HTB.png'
import vol from '../../../images/vol.png'
import step3HTBextra from '../../../images/step3HTBextra.jpg'

const Step3 = () => {
    return (
        <div class="container">
            <div class="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <p style={{color: "#000000", textAlign: "start"}}><b>Step 3: Swap Binance (BNB) for Impact Token (IMP) </b></p>
                <p style={{color: "#000000", textAlign: "start"}}>
                    Once you have <b>BNB</b> on your Trust Wallet, Go to <b>PancakeSwap</b> website (pancakeswap.finance) from your iPhone browser, ie: Safari to connect with your Trust Wallet via <b>WalletConnect</b>. Click <u style={{color: "#"}}>here</u> for the official guide on how to connect your TrustWallet on IOS device to PancakeSwap via WalletConnect.
                </p>
                <span style={{color: "#000000", textAlign: "start"}}>
                <img src={step3HTBextra} className="step3HTBextra" alt="step3HTBextra"/>
                    Click the <img src={vol} alt="column" width="18px"/> icon and set the slippage in between 12% to 15%. If you want to give it the best possible change to clear, increase the deadline. By default it should be set to 20 minutes.
                    </span>
               
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <img className="step1HTB" src={step3} alt="step 3"/>
                </div>
            </div>

            <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                    <p style={{color: "#000000", textAlign: "start"}}>Once the slippage is set, and you have the <b>BNB</b> amount set that you wish to swap for <b>Impact Token</b>, just click Swap and wait patiently for the transaction to clear. This process may not be instant and can take anywhere from 10 to 15 minutes. Once the transaction has been cleared, you will be able to see your <b>Impact Token</b> in your Trust Wallet!</p>

                </div>

            </div>
        </div>
    )
}


export default Step3;