import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from 'store/thunks/postsThunk';

const Pagination = ({ pagination }) => {
    const dispatch = useDispatch();

    const handleChangePage = (page) => {
        dispatch(fetchPosts(page))
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button
                type="button" 
                className="btn btn-outline-primary btn-sm"
                onClick={() => handleChangePage(pagination.prevPage)} 
                disabled={!pagination.prevPage}>
                    &laquo;
            </button>
            {Array.from({length: pagination.pageCount}, ((_, page) => 
                <button                 
                    type="button" 
                    className="btn btn-outline-primary btn-sm" 
                    key={`key:page${page + 1}`}
                    onClick={() => handleChangePage(page + 1)}> 
                        {page + 1} 
                </button>
            ))}
            <button 
                type="button" 
                className="btn btn-outline-primary btn-sm"
                onClick={() => handleChangePage(pagination.nextPage)} 
                disabled={!pagination.nextPage}>
                    &raquo;
            </button>
        </div>
    )
}

export default Pagination;