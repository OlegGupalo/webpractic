import React from 'react'
import {ExcelRenderer, OutTable} from 'react-excel-renderer'

type RowCol = {
    row: string[],
    cols: string[]
}

interface ExcelImportProps {
    state: RowCol
}

class ExcelImport extends React.Component {
    state = {
        cols: [],
        rows: []
    }

    uploadFile = (e) => {
        let fileObject = e.target.files[0]
        ExcelRenderer(fileObject, (err, resp) => {
            if(err) {
                console.warn(err)
            } else {
                console.log("resp", resp)
                const {cols, rows} = resp
                console.log("rows", rows)
                this.setState({
                    cols,
                    rows
                }, () => {
                    const data = [...rows]
                    data.shift()
                    this.props.uploadHandler(data)
                })
            }
        })
    }

    

    render(): React.ReactNode {
        return (<>
            <div>
                <label>Загрузить Расписание</label>
                <input type='file' onChange={this.uploadFile} />
            </div>
            <OutTable
                data={this.state.rows}
                columns={this.state.cols}
                tableClassName="excel-table"
            />
        </>)
    }
}

export default ExcelImport