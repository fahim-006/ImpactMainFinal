import step1 from '../../../images/step1HTB.png'

const Step1 = () => {
    return (
        <div class="container">
            <div class="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <p style={{color: "#000000"}}><b>Step1: Create a Wallet</b></p>
                    <p style={{color: "#000000",
                    }}>Download Trust Wallet and create a wallet. Keep your phrase a secret! Never share it with anyone and store it properly!</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img className="step1HTB" src={step1} alt="step 1"/>
                </div>
            </div>
        </div>
    )
}

export default Step1;