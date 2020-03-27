import App from "./App/Home";
import { ApolloProvider } from '@apollo/react-hooks';
import withData from './services/apollo-client';
import { injectGlobal } from './styled/global.style';

const Index = ({ apollo }) => (
  <ApolloProvider client={apollo}>
    <App />
  </ApolloProvider>
)

export default withData(Index);
