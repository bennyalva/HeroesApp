import React, { useMemo } from 'react';
import queryString from 'query-string' ;
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const { q = ''} = queryString.parse( location.search);
    const [{heroeDesc}, handlerInputChange, reset ] = useForm({heroeDesc: q});
    const heroesFilters = useMemo(() => getHeroesByName( q ), [q])
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (heroeDesc.trim().length <= 1 ) {
            return;
        }
        history.push(`?q=${ heroeDesc }`)
        console.log('heroe: ', heroeDesc)
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handlerSubmit}>
                        <input
                            type="text"
                            name="heroeDesc"
                            placeholder="Find a heroe"
                            className="form-control" 
                            onChange={handlerInputChange}
                            value={heroeDesc}
                        />
                        <button 
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary">
                                    Search

                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results</h4>
                    {
                            (q === '')
                            &&
                            <div className="alert alert-info">
                                Search a heroe
                            </div>
                    }
                     {
                            (q !== '' && heroesFilters.length === 0)
                            &&
                            <div className="alert alert-danger">
                                There is no a heroe with {q}
                            </div>
                    }
                    {
                        heroesFilters.map(heroe => (
                            <HeroCard key={heroe.id}
                                      {...heroe} />
                        ))
                    }
                    <hr />
                </div>
            </div>
            
        </div>
    )
}
