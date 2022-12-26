import React from 'react'

const setup = ({ data, handleChangefilter, onChangeTick, onChangeTickAll, onClickSave, onClickReset, val, checkedAllVal }) => {
    return (
        <div>
            <div>Doctors</div>
            <div>
                <div>
                    <input type='checkbox' value={checkedAllVal} onChange={onChangeTickAll} id='selectAll' />
                    <label htmlFor='selectAll' >Select All</label>
                </div>
                <div>
                    <input type='text' onChange={handleChangefilter} value={val} placeholder='search' />
                </div>
            </div>
        </div>
    )
}

export default setup