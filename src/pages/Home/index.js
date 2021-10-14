import Datatable from '../../components/Datatable/Datatable';
import DefaultLayout from '../../components/DefaultLayout';

function Home() { 
  return (
    <DefaultLayout>
      <h2>Tabela de servidores</h2>
      <Datatable></Datatable>
    </DefaultLayout>
  );
}

export default Home;