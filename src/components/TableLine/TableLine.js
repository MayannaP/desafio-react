import { useState } from "react"
import { useSelectedServers } from '../../context/datatable/selectedServers';
import './styles.css'
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
      <td className="table-body-cell">
        <input type="checkbox" onChange={handleChange} checked={selected} />
      </td>
      <td className="table-body-cell">Server {props.id + 1}</td>
      <td className="table-body-cell">{memoryProvisioned} GB</td>
      <td className="table-body-cell">{cpuProvisioned} vCPUs</td>
      <td className="table-body-cell">{totalDiskGB.toFixed(0)} GB</td>
      <td className="table-body-cell">{ip}</td>
    </tr>
  )
}