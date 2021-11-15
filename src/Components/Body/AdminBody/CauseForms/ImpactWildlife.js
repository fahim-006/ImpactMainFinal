
import AdminNav from "../AdminNav";
const ImpactWildLife = () => {
    return (
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
            <h3>Impact.Wild</h3>
            <form>
                <div class="form-group">
                    <label for="CauseHeadline">Cause Headline</label>
                    <input type="text" class="form-control" id="name" name="name" value="Impact.wildlife" placeholder="Enter Headline" disabled/>
                </div>
                <div class="form-group">
                    <label for="CauseHeadline">2nd Headline</label>
                    <input type="text" class="form-control" id="name1" name="name1" placeholder="Target Market cap $25M"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Details</label>
                    <textarea class="form-control" name="details" id="exampleFormControlTextarea1" rows="5"></textarea>
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

export default ImpactWildLife;