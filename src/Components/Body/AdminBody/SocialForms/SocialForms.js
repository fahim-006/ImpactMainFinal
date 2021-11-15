const SocialForms = () => {
    return(
        <div>
        <h3>Social Links</h3>
      <form>
          <div class="form-group">
              <label for="CauseHeadline">Facebook</label>
              <input type="text" class="form-control" id="name" name="name" value="facebook" placeholder="Enter Headline" disabled/>
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">Link</label>
              <input type="url" class="form-control" id="details" name="details" placeholder="Enter Facebook URL"/>
          </div>
            <br/>
            <div class="form-group">
              <label for="CauseHeadline">Youtube</label>
              <input type="text" class="form-control" id="name" name="name" value="youtube" placeholder="Enter Headline" disabled/>
          </div>
          <div class="form-group">
              <label for="Link">Link</label>
              <input type="url" class="form-control" id="details" name="details" placeholder="Enter Youtube URL"/>
          </div><br/>
          <div class="form-group">
                    <label for="CauseHeadline">Discord</label>
                    <input type="text" class="form-control" id="name" name="name" value="discord" placeholder="Enter Headline" disabled/>
                </div>
                <div class="form-group">
                    <label for="link">Link</label>
                    <input type="url" class="form-control" id="details" name="details" placeholder="Enter Discord URL"/>
            </div> <br/>
            <div class="form-group">
                    <label for="CauseHeadline">Btok</label>
                    <input type="text" class="form-control" id="name" name="name" value="btok" placeholder="Enter Headline" disabled/>
                </div>
                <div class="form-group">
                    <label for="Link">Link</label>
                    <input type="url" class="form-control" id="details" name="details" placeholder="Enter Btok URL"/>
            </div> <br/>
            <div class="form-group">
              <label for="CauseHeadline">Instagram</label>
              <input type="text" class="form-control" id="name" name="name" value="instagram" placeholder="Enter Headline" disabled/>
          </div>
          <div class="form-group">
              <label for="Link">Link</label>
              <input type="url" class="form-control" id="details" name="details" placeholder="Enter Instagram URL"/>
          </div><br/>
          <div class="form-group">
              <label for="CauseHeadline">Reddit</label>
              <input type="text" class="form-control" id="name" name="name" value="facebook" placeholder="Enter Headline" disabled/>
          </div>
          <div class="form-group">
              <label for="Link">Link</label>
              <input type="url" class="form-control" id="details" name="details" placeholder="Enter Reddit URL"/>
          </div><br/>
          <div class="form-group">
              <label for="CauseHeadline">Twitter</label>
              <input type="text" class="form-control" id="name" name="name" value="twitter" placeholder="Enter Headline" disabled/>
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">Link</label>
              <input type="url" class="form-control" id="details" name="details" placeholder="Enter twitter URL"/>
          </div> <br/>
          <div class="form-group">
              <label for="CauseHeadline">Telegram</label>
              <input type="text" class="form-control" id="name" name="name" value="telegram" placeholder="Enter Headline" disabled/>
          </div>
          <div class="form-group">
              <label for="Link">Link</label>
              <input type="url" class="form-control" id="details" name="details" placeholder="Enter Telegrm URL"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
    )
}

export default SocialForms;