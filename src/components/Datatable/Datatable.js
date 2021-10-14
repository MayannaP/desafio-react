import { useEffect, useState } from 'react';
import api from '../../services/api.js'
import TableLine from '../TableLine/TableLine.js';

export default function Datatable () {

  const [data, setData ] = useState([]); 

  useEffect(()=>{
    (async () => { 
      const response = await api.get('http://localhost:3333/servers');
      setData(response.data)
      console.log(response.data)
    })()
  }, [])

  return ( 
    <div className="table-container">
      <h2 className="table-title">Tabela de servidores</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="table-heading">Select</th>
            <th className="table-heading">Hostname</th>
            <th className="table-heading">Memória</th>
            <th className="table-heading">vCPUs</th>
            <th className="table-heading">Disco</th>
            <th className="table-heading">IP</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map( (serverInfo, index) => { 
              return(
                <TableLine key={index} id={index} data={serverInfo.configuracao} /> 
                )
              }) 
            }
        </tbody>
      </table>
    </div>
  )
}