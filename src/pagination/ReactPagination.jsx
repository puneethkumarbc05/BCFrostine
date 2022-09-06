import React from 'react'
import { Pagination } from 'semantic-ui-react'

export const ReactPagination = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <Pagination defaultActivePage={1} totalPages={5} />
            <input type='radio' id='gender' value='male' name='gender' onChange={handleChange} />male
            <input type='radio' id='gender' value='female' name='gender' onChange={handleChange} />female
            <div>
                <div style={{ display: 'flex', width: '30px', height: '30px', borderRadius: '50%', borderColor: 'red', padding: '10px' }}>
                    <div style={{ width: '27px', height: '27px', borderRadius: '50%', backgroundColor: 'red' }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
