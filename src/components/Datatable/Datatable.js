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
    <div className="container">
      <h2>Tabela de servidores</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Hostname</th>
            <th>Memória</th>
            <th>vCPUs</th>
            <th>Disco</th>
            <th>IP</th>
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