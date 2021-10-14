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
      <td>
        <input type="checkbox" onChange={handleChange} checked={selected} />
      </td>
      <td>Server {props.id + 1}</td>
      <td>{memoryProvisioned}GB</td>
      <td>{cpuProvisioned}vCPUs</td>
      <td>{totalDiskGB.toFixed(0)}GB</td>
      <td>{ip}</td>
    </tr>
  )
}