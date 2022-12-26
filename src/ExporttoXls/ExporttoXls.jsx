import React from 'react'
import { useEffect, Component } from 'react'

// xlsx export
class HTMLTableToExcel extends Component {
    constructor(props) {
        super(props);
        this.handleDownload = this.handleDownload.bind(this);
    }

    static base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
    }

    static format(s, c) {
        return s.replace(/{(\w+)}/g, (m, p) => c[p]);
    }

    handleDownload() {
        if (!document) {
            return null;
        }
        if (
            document.getElementById(this.props.table).nodeType !== 1 ||
            document.getElementById(this.props.table).nodeName !== "TABLE"
        ) {
            return null;
        }
        const table = document.getElementById(this.props.table).outerHTML;
        const sheet = String(this.props.sheet);
        const filename = `${String(this.props.filename)}.xls`;
        const uri = "data:application/vnd.ms-excel;base64,";
        const template =
            '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
            'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
            'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
            "lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>" +
            "</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></" +
            "xml><![endif]--></head><body>{table}</body></html>";
        const context = {
            worksheet: sheet || "Worksheet",
            table,
        };

        // If IE11

        if (window.navigator.msSaveOrOpenBlob) {
            const fileData = [
                '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            ];
            const blobObject = new Blob(fileData);
            document.getElementById("react-html-table-to-excel").click()(() => {
                window.navigator.msSaveOrOpenBlob(blobObject, filename);
            });
            this.props.hide([]);
            return true;
        }

        const element = window.document.createElement("a");
        element.href =
            uri + HTMLTableToExcel.base64(HTMLTableToExcel.format(template, context));
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        this.props.hide([]);
        return true;
    }
    componentDidMount() {
        this.handleDownload("xlsx");
    }
    render() {
        return (
            <div
                id="react-html-table-to-excel"
                className={this.props.className}
                onClick={() => this.handleDownload("xlsx")}
            >
                {this.props.excelButton}
            </div>
        );
    }
}

const ExporttoXls = ({ }) => {
    useEffect(() => {

        // const arr = [1, 2, 3, 4, 5, 6, 7]
        // const arr2 = 2

        // arr.find(ele => {
        //     if (ele === arr2) {
        //         console.log(ele);
        //         arr.remove(ele)
        //     }
        // })

        // console.log(arr)
    }, [])





    return (
        <div>
        </div>
    )
}

export default ExporttoXls