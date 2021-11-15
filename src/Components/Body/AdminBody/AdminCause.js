import AdminNav from "./AdminNav";
import ImpactPlant from "./CauseForms/ImpactPlant";

const AdminCause = () => {
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
                            <ImpactPlant/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCause;