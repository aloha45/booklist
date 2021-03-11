import List from './components/List';
import Navbar from './components/Navbar';
import Form from './components/Form'
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <List />
        <Form />
      </BookContextProvider>
    </div>
  );
}

export default App;
