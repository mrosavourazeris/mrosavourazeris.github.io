import React from 'react'

const Contact = () => (
  <div className="container">
    <div className="card bg-light mb-3 ">
      <div className="card-header bg-dark text-light">
        <h1>Contact</h1>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" ></input>
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
</div>
)

export default Contact