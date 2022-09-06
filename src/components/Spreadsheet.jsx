import { CellDirective, CellsDirective, ColumnDirective, ColumnsDirective, RangeDirective, RangesDirective, RowDirective, RowsDirective, SheetDirective, SheetsDirective, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet'
import React, { useEffect, useState } from 'react'

export const Spreadsheet = () => {

    const [defaultData, setDefaultData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=>setDefaultData(data))
    },[])

   

   
    return (
        <div>
            <SpreadsheetComponent openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open'
                saveUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'
                >
                <SheetsDirective>
                    <SheetDirective name="" >
                        <RangesDirective >
                            <RangeDirective dataSource={defaultData}></RangeDirective>
                        </RangesDirective>
                        
                        <ColumnsDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={180}></ColumnDirective>
                            <ColumnDirective width={130}></ColumnDirective>
                            <ColumnDirective width={120}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    )
}
