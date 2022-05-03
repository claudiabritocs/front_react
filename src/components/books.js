import React from 'react';

const Books = (props)=>{
    return (
        <div>
            <h2>Listagem</h2>
            {
                props.livros.map(livro => {
                    return(
                        <div key={livro.id}>
                            <h3>{livro.title}</h3>
                            <p>{livro.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Books;