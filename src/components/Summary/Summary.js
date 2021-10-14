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
    <div className="table-container summary-container">
        <h2 className="table-title">Sumário dos recursos dos servidores</h2>
      <table className="summary-table table">
        <thead>
          <tr className="table-heading">Servidores Selecionados</tr>
          <tr className="table-heading">Total de Memória</tr>
          <tr className="table-heading">Total de CPUs</tr>
          <tr className="table-heading">Total de Discos</tr>
        </thead>
        <tbody className="summary-body">
          <tr className="table-body-cell">{selectedServers.length} servidores selecionados</tr>
          <tr className="table-body-cell">{totalMemory} GB</tr>
          <tr className="table-body-cell">{totalDiskGB.toFixed(0)} vCPUs</tr>
          <tr className="table-body-cell">{totalcpuProvisioned} GB</tr>
        </tbody>
      </table>
    </div>
  )
}