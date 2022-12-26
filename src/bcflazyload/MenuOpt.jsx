import React from 'react'

const MenuOpt = ({ title }) => {
    console.log(title);
    return (
        <div>
            <ol>
                {title.map((item, index) => {
                    return <li key={item.id}>
                        {item.title}
                    </li>
                })}
            </ol>
        </div>
    )
}

export default MenuOpt