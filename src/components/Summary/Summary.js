import './styles.css';
import { useSelectedServers } from '../../context/datatable/selectedServers';

export default function Summary(props) {  
  const { selectedServers } = useSelectedServers();

  let totalMemory = 0;
  for (let server of selectedServers) { 
    totalMemory += server.memoryProvisioned;
  }
  
  let totalDiskGB = 0; 
  for (let server of selectedServers) { 
    totalDiskGB += server.totalDiskGB;
  }
  
  let totalcpuProvisioned = 0; 
  for (let server of selectedServers) { 
    totalcpuProvisioned += server.cpuProvisioned;
  }

  return(
    <div className="summary-container">
        <h2 className="summary-title">Sumário dos recursos dos servidores</h2>
      <table className="summary-table">
        <tbody>
          <tr>
            <th className="summary-heading">Servidores Selecionados</th>
            <td className="summary-body-cell">{selectedServers.length} servidores selecionados</td>
          </tr>
          <tr>
            <th className="summary-heading">Total de Memória</th>
            <td className="summary-body-cell">{totalMemory} GB</td>
          </tr>
          <tr>
            <th className="summary-heading">Total de CPUs</th>
            <td className="summary-body-cell">{totalcpuProvisioned} vCPUs</td>
          </tr>
          <tr>
            <th className="summary-heading">Total de Discos</th>
            <td className="summary-body-cell">{totalDiskGB.toFixed(0)} GB</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}