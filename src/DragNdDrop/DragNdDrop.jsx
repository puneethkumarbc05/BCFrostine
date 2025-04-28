import React, { useState } from 'react'
import "./DragNdDrop.css"

const DragNdDrop = () => {
    const [dragStartIndex, setDragStartIndex] = useState(null);
    const [dragOverIndex, setDragOverIndex] = useState(null);
    const [list, setList] = useState([
        {
            "c_image": "mastericon.svg",
            "c_name": "All Master",
            "n_id": "1"
        },
        {
            "c_image": "customer_list.png",
            "c_name": "Customer List",
            "n_id": "2"
        },
        {
            "c_image": "visit_related.svg",
            "c_name": "Visit  Related",
            "n_id": "3"
        },
        {
            "c_image": "Operational_menu.svg",
            "c_name": "Operational",
            "n_id": "4"
        },
        {
            "c_image": "analysis.svg",
            "c_name": "Report",
            "n_id": "5"
        },
        {
            "c_image": "young-man-with-tie.svg",
            "c_name": "Hr Module",
            "n_id": "6"
        },
        {
            "c_image": "charts.svg",
            "c_name": "Sales Report",
            "n_id": "7"
        },
        {
            "c_image": "cogwheels.svg",
            "c_name": "Utility",
            "n_id": "8"
        },
        {
            "c_image": "visit_related.svg",
            "c_name": "Authorisation",
            "n_id": "9"
        },
        {
            "c_image": "mastericon.svg",
            "c_name": "Others",
            "n_id": "10"
        },
        {
            "c_image": "charts.svg",
            "c_name": "Sales",
            "n_id": "11"
        },
        {
            "c_image": "Operational_menu.svg",
            "c_name": "Option",
            "n_id": "13"
        },
        {
            "c_image": "analysis.svg",
            "c_name": "Prp And Rps Reports",
            "n_id": "14"
        },
        {
            "c_image": "target.svg",
            "c_name": "Target",
            "n_id": "17"
        },
        {
            "c_image": "cogwheels.svg",
            "c_name": "Hr Reports",
            "n_id": "18"
        },
        {
            "c_image": "Message.svg",
            "c_name": "Message",
            "n_id": "19"
        },
        {
            "c_image": "Expense_document.svg",
            "c_name": "Expense",
            "n_id": "20"
        },
        {
            "c_image": "Mapping.svg",
            "c_name": "Mapping",
            "n_id": "21"
        },
        {
            "c_image": "Competitor.svg",
            "c_name": "Competitor",
            "n_id": "22"
        },
        {
            "c_image": "gadget.svg",
            "c_name": "Gadget",
            "n_id": "24"
        },
        {
            "c_image": "letter.svg",
            "c_name": "Circular",
            "n_id": "25"
        },
        {
            "c_image": "Investment.svg",
            "c_name": "Investment Master",
            "n_id": "26"
        },
        {
            "c_image": "flyer.svg",
            "c_name": "Material Master",
            "n_id": "27"
        },
        {
            "c_image": "Different.svg",
            "c_name": "Variance",
            "n_id": "28"
        },
        {
            "c_image": "sample.svg",
            "c_name": "Sample",
            "n_id": "29"
        }
    ])

    function _onDragOver(e, index) {
        e.preventDefault();
        setDragOverIndex(index);

        if (dragStartIndex === index) return;

        const updatedItems = [...list];
        const [draggedItem] = updatedItems.splice(dragStartIndex, 1);
        updatedItems.splice(index, 0, draggedItem);

        setDragStartIndex(index);
        setList(updatedItems)
    }

    const handleDragEnd = () => {
        setDragStartIndex(null);
        setDragOverIndex(null);
    };

    function _onDragStart(index) {
        setDragStartIndex(index)
    }

    const handleDragLeave = () => {
        setDragOverIndex(null);
        setDragOverIndex(null);
    };

    return (
        <div className='dnd_wrapp' >
            <div className='dnd_wrapp_list'>
                <div className='item_list_conti' >
                    {list.map((item, index) => {
                        return <div
                            key={index}
                            draggable
                            onDragStart={() => _onDragStart(index)}
                            onDragOver={(e) => _onDragOver(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragLeave={handleDragLeave}
                            className={`item ${dragStartIndex === index ? "dragging" : ""} ${dragOverIndex === index ? "dragover" : ""}`}
                        >
                            {item['c_name']}
                        </div>
                    })}
                </div>
            </div>
        </div >
    )
}

export default DragNdDrop
