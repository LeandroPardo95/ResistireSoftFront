const Todo = ({todo})=> {
    return (
        <div className='card mt-2'>
            <div className='card-body'>
                <h5 className='card-title'>
                    {todo.name}
                </h5>
                <p className='card-text'>
                    {todo.description}
                </p>

                <div className='d-flex justify-content-end gap-2'>

                    <button className="btn btn-outline-primary">
                        Editar
                    </button>

                    <button className="btn btn-outline-danger">
                        Eliminar
                    </button>

                    <button className='btn btn-outline-success'>
                        Terminar
                    </button>
                </div>

            </div>
        </div>
)
}

export default Todo;