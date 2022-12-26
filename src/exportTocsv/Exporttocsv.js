import React from 'react'
import { useEffect } from 'react'

const Exporttocsv = () => {

    useEffect(() => {
        // toTable = array of objects(response)
        // str = file name
        exportXlsx(toTable, str)
        const arar = [
            {
                "C_code": "DI0002",
                "C_name": "UNIQUE VIVA"
            },
            {
                "C_code": "28",
                "C_name": "B NOVA CLOSED"
            },
            {
                "C_code": "POM1",
                "C_name": "C POM1 DIV"
            },
            {
                "C_code": "02",
                "C_name": "k"
            },
            {
                "C_code": "23",
                "C_name": "UNIQUE IIVA"
            },
            {
                "C_code": "DI0001",
                "C_name": "UNIQUE JIVA"
            },
            {
                "C_code": "05",
                "C_name": "UNIQUE SPL CLOSED"
            },
            {
                "C_code": "29",
                "C_name": "A TEST DIV Irshad"
            },
        ]
    }, [])

    const exportXlsx = (reportTable, lable) => {
        let data1 = [];
        reportTable.map((obj) => {
            let dynamicObj = {};
            Object.keys(obj).map((res, i) => {
                dynamicObj[res] = obj[res];
            });
            data1.push({
                ...dynamicObj,
            });
        });
        let ShowLabel = lable;
        JSONToCSVConvertor(data1, lable, ShowLabel)
    }

    const JSONToCSVConvertor = (JSONData, ReportTitle, ShowLabel) => {
        var arrData =
            typeof JSONData !== "object" ? JSON.parse(JSONData) : JSONData;

        var CSV = "";
        CSV += ShowLabel + "\r\n\n";

        if (ShowLabel) {
            var row = "";
            var row2 = "";
            for (var index in arrData[0]) {
                row += index + ",";
            }
            row = row.slice(0, -1);
            CSV += row + "\r\n";
        }
        for (var i = 0; i < arrData.length; i++) {
            var row = "";
            var row2 = "";
            for (var index in arrData[i]) {
                if (typeof arrData[i][index] === "string") {
                    row += '"' + arrData[i][index].toUpperCase() + '",';
                } else {
                    row += '"' + arrData[i][index] + '",';
                }
            }
            row.slice(0, row.length - 1);
            CSV += row + "\r\n";
        }

        if (CSV === "") {
            alert("Invalid data");
            return;
        }
        var fileName = ReportTitle;
        var uri = "data:text/csv;charset=utf-8," + escape(CSV);
        var link = document.createElement("a");
        link.href = uri;
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>

        </div>
    )
}

export default Exporttocsv