const ImpactPlant = (e) => {
    const handlePlantSubmit = () => {
        e.preventDefault();
       // window.location.href='/adminimpactanimals'
       
        
    }

    return (
        <div>
            <h3>Impact.plant</h3>
            <form onSubmit={handlePlantSubmit}>
                <div class="form-group">
                    <label for="CauseHeadline">Cause Headline</label>
                    <input type="text" class="form-control" id="name" name="name" value="Impact.plant" placeholder="Enter Headline" disabled/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Details</label>
                    <textarea class="form-control" name="details" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default ImpactPlant;