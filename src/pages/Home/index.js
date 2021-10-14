import Datatable from '../../components/Datatable/Datatable';
import DefaultLayout from '../../components/DefaultLayout';
import Summary from '../../components/Summary/Summary';

function Home() { 
  return (
    <DefaultLayout>
      <div className="container">
        <Summary />
        <Datatable />
      </div>
    </DefaultLayout>
  );
}

export default Home;