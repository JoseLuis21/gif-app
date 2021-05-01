import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { startLogout } from '../../actions/auth';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';



export const GifPage = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const [categories, setCategories] = useState(['Dragon Ball Z', 'Madara']);

    return (
        <div>
            <h2>Escalab Gif Search... Escribe y presiona enter para buscar</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
            <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={ handleLogout }>Salir</button>
        </div>
    )
}
