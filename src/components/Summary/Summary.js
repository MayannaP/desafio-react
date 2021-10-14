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
    <div className="container">
        <h2 className="summary__title">Sumário dos recursos dos servidores</h2>
      <table className="summary__table">
        <thead className="summary__headings">
          <tr>Servidores Selecionados</tr>
          <tr>Total de Memória</tr>
          <tr>Total de CPUs</tr>
          <tr>Total de Discos</tr>
        </thead>
        <tbody className="summary__body">
          <tr>{selectedServers.length} servidores selecionados</tr>
          <tr>{totalMemory} GB</tr>
          <tr>{totalDiskGB.toFixed(0)} vCPUs</tr>
          <tr>{totalcpuProvisioned} GB</tr>
        </tbody>
      </table>
    </div>
  )
}