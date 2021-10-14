import { useEffect, useState } from 'react';
// import { useSelectedServers } from '../../context/datatable/selectedServers';
import api from '../../services/api.js'

export default function Datatable () {
  //Consome a API, salva os valores nesse useContext, depois joga pra os components de registros. 
  //Depois disso, os que estiverem selected (estado local do registro) vão modificar o estado inicial e enviar pro summary
  // const { selectedServers, setSelectedServers } = useSelectedServers();
  const [allServers, setAllServers ] = useState([]); 

  useEffect(()=>{
    (async () => { 
      const response = await api.get('http://localhost:3333/servers')
      setAllServers(response)
      console.log(allServers)
    })()
  }, [])

  return ( 
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
    </table>
  )
}