import { Base } from '../Base';
import { MockBase } from '../Base/mock';

const Home = () => {
  return <Base {...MockBase} />;
};

export default Home;
