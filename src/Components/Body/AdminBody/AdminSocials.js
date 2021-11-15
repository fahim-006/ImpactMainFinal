import AdminNav from "./AdminNav";
import SocialForms from "./SocialForms/SocialForms";

const AdminSocials = () => {
    return(
        <div>
             <AdminNav/>
             <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Edit your social links</h3>
                        </div>
                        <div className="col-12">
                            <SocialForms/>   
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default AdminSocials;