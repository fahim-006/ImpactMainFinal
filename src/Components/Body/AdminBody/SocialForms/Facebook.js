import { useEffect, useState } from "react";
import { insertSocialURL } from "../../../../api/apiSocials";
import AdminNav from "../AdminNav";


const Facebook = () => {
    const [values, setValues] = useState({
        id: "",
        name: "facebook",
        details: ""
    })

    const {
        id,
        name,
        details
    } = values;

    useEffect(()=>{

    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e)=>{
             e.preventDefault();
            insertSocialURL(values)
                .then(response => {
                    if(response.status === 200){
                        alert("Facebook URL submitted")
                    }else{
                        alert(response.status)
                    }
                })
    }

    return(
        <div>
        <AdminNav/>
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Welcome to Admin of Cause Edit page</h3>
                    </div>
                    <div className="col-12">
        <div>
              <h3>Facebook</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="CauseHeadline">Facebook</label>
                    <input type="text" class="form-control" id="name" name="name" value="facebook" placeholder="Enter Headline" disabled/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Link</label>
                    <input type="url" class="form-control" id="details" name="details" onChange={handleChange} placeholder="Enter Facebook URL"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Facebook;