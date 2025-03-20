import { Layout } from './components/Layout';
import Square from './components/Square/Square';

const hhLink =
    'https://spb.hh.ru/resume/22966ea7ff0d777d030039ed1f316963564830';

const App: React.FC = () => {
    return (
        <div>
            <Layout>
                <Square color="black" link={hhLink} />
            </Layout>
        </div>
    );
};

export default App;
