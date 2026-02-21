function Todoprojectappone() {
    return(
        <center className="todo_block">
        <h1>Todo App</h1>
        <div className="row">
            <div className="col-7 col-sm-6 col-md-6  ">
                <input type="text" className="form-control" placeholder="Enter your todo here"/>
            </div>
            <div className="col-3 col-sm-4 col-md-4  ">
                <input type="date" className="form-control" placeholder="DD/MM/YYYY"/>
            </div>
            <div className="col-1 col-sm-2 col-md-2  ">
                <button className="btn btn-primary">Add</button>
            </div>
        </div>

        </center>
    )
}

export default Todoprojectappone;