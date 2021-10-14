import { useEffect, useState } from 'react';
import api from '../../services/api.js'
import TableLine from '../TableLine/TableLine.js';
import './styles.css'

export default function Datatable () {

  const [data, setData ] = useState([]); 

  useEffect(()=>{
    (async () => { 
      const response = await api.get('http://localhost:3333/servers');
      setData(response.data)
    })()
  }, [])

  return ( 
    <div className="datatable-container">
      <h2 className="datatable-title">Tabela de servidores</h2>
      <table className="datatable">
        <thead>
          <tr>
            <th className="datatable-heading">Select</th>
            <th className="datatable-heading">Hostname</th>
            <th className="datatable-heading">Memória</th>
            <th className="datatable-heading">vCPUs</th>
            <th className="datatable-heading">Disco</th>
            <th className="datatable-heading">IP</th>
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