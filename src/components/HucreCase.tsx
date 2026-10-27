import 'react-data-grid/lib/styles.css';

import {useState} from "react"
import {readXlsx,writeXlsx,toWriteOptions,type Workbook,type WriteOptions} from "hucre"

import { DataGrid, type Column} from 'react-data-grid';

type tableValue = string | number | boolean | undefined | null
 
interface Row {
  [key: string]: tableValue;
}

interface Table {
  columns: Column<Row>[];
  rows: Row[];
  name: string;
}

const HucreCase = () => {

  const [file, setFile] = useState<File|null>(null);
  const [tables, setTables] = useState<Table[]|null>(null);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) : void=> {
    if (!e.target.files) return;
    const f = e.target.files[0];
    if (!f) return;
    const ext = f.name.slice(f.name.lastIndexOf('.')).toLowerCase();
    if (!['.xlsx', '.xls', '.csv'].includes(ext)) {
      alert('只能上传 xlsx、xls 或 csv');
      e.target.value = '';
      return;
    }
    setFile(f);
  };

  /*
  const uploadButton =
   <button className="bg-gray-300 text-black hover:cursor-pointer py-2 px-2 hover:text-purple-400 hover:font-bold rounded-md" onClick={handleUpload}>
                上传文件
    </button> 
  const handleUpload = async ():Promise<void> => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    await fetch('/api/upload', { method: 'POST', body: formData });
  };
  */

  const resToTable = (data:Workbook, skiprow:number = 0): void => {
   const sheets = data.sheets;
   //const res = []
   for (const sheet of sheets) {
     const rows = sheet.rows;
     const cols = rows[skiprow];
     const columns:Column<Row>[] = cols.map((col,index) => {
      if (col) {
        return { key: col.toString(), name: col.toString(), resizable: true};
      } else {
        return { key: index.toString(), name: index.toString() };
      }
     });
     // 获取rows
     const rowsData:Row[] = rows.slice(skiprow+1).map((row) => {  
       let rowObj: Row = {};
       for (let i = 0; i < columns.length; i++) {
          let rowValue: tableValue;
          if (row[i] != null && row[i] instanceof Date) {
            rowValue = row[i]?.toLocaleString();
          } else {
            rowValue = row[i] as tableValue;
          }
          rowObj[columns[i].key] = rowValue;
       }
       return rowObj;
     });
     // 创建表格对象并设置列和行数据
     const table:Table = { columns, rows: rowsData, name: file? file.name : 'input.xlsx' };
    
     setTables(tables? [...tables, table] : [table] );
   }
  }


  const handleExcel = async (skiprow: number):Promise<void> => {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const data = await readXlsx(buffer);
    resToTable(data, skiprow);
  };

  const saveXlsx = async ():Promise<void> => {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const data = await readXlsx(buffer);
    const writeOpts: WriteOptions = toWriteOptions(data);
    const wbuffer = await writeXlsx(writeOpts);
    const MIME =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    const outputFile = new File([wbuffer as Uint8Array<ArrayBuffer>], "output.xlsx", {
      type: MIME,
    });
    const url = URL.createObjectURL(outputFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = "生成_" + file.name;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full min-h-screen flex flex-col pb-[3vh]">
      <div className="w-full h-[10vh] bg-indigo-400 px-8 py-3 flex flex-row justify-end gap-2">
        {file &&
          <div className='flex flex-col h-full justify-start items-center flex-wrap gap-1'>
            <button className="text-cyan-100 hover:cursor-pointer py-2 px-2 hover:text-white hover:font-bold rounded-md" onClick={() => handleExcel(0)}>
                展示Excel表格
            </button>            
            <button className="text-cyan-100 hover:cursor-pointer py-2 px-2 hover:text-white hover:font-bold rounded-md" onClick={()=>{setFile(null); setTables(null)}}>
                清空记录
            </button>
            <button className="text-cyan-100 hover:cursor-pointer py-2 px-2 hover:text-white hover:font-bold rounded-md" onClick={saveXlsx}>
                保存为Excel文件
            </button>
          </div>
        }
        <div className="w-32 h-[96%] text-white font-bold bg-blue-400 flex justify-center items-center mb-3 rounded-sm">
              <label htmlFor="fileInput" className="hover:cursor-pointer">选择文件</label>
              <input type="file" id="fileInput" accept=".xlsx,.xls,.xlsm,.csv" hidden onChange={handleChange}/>
        </div>
      </div>
      <div className="max-h-[75%] w-[90%] mx-auto mt-8">
        {
          tables?.map((table, index) => (
            <div key={index}>
              <h1 className="text-2xl font-bold mt-4 mb-2">{table.name}</h1>
              <DataGrid columns={table.columns} rows={table.rows} />
            </div>
          ))  
        }
      </div>
    </div>
  )
}

export default HucreCase