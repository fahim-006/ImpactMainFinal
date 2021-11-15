import AdminNav from "../AdminNav";

const ImpactAnimal = () => {
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
            <h3>Impact.Animal</h3>
            <form>
                <div class="form-group">
                    <label for="CauseHeadline">Cause Headline</label>
                    <input type="text" class="form-control" id="name" name="name" value="Impact.animal" placeholder="Enter Headline" disabled/>
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

export default ImpactAnimal;