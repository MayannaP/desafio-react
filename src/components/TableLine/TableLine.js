import { useState } from "react"
import { useSelectedServers } from '../../context/datatable/selectedServers';

export default function TableLine(props) {

  const { selectedServers, setSelectedServers } = useSelectedServers();
  const [ selected, setSelected ] = useState(false);
  const { totalDiskGB, memoryProvisioned, cpuProvisioned, ip,} = props.data;
  
  const handleChange = ()=> { 
    if (!selected) { 
      setSelectedServers([
        ...selectedServers, 
        { 
          id:props.id, 
          totalDiskGB, 
          memoryProvisioned, 
          cpuProvisioned 
        }
      ])
    } else { 
      const newSelectedServers = selectedServers.filter(server => server.id !== props.id); 
      setSelectedServers(newSelectedServers);
    }
    
    setSelected(!selected);
  }
  
  return(
    <tr>
      <td className="table-body-cell datatable-body">
        <input type="checkbox" onChange={handleChange} checked={selected} />
      </td>
      <td className="table-body-cell datatable-body">Server {props.id + 1}</td>
      <td className="table-body-cell datatable-body">{memoryProvisioned} GB</td>
      <td className="table-body-cell datatable-body">{cpuProvisioned} vCPUs</td>
      <td className="table-body-cell datatable-body">{totalDiskGB.toFixed(0)} GB</td>
      <td className="table-body-cell datatable-body">{ip}</td>
    </tr>
  )
}