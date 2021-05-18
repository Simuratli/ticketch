import './App.css';
import TicketHeader from './components/TicketHeader/TicketHeader'
import TicketCardHeading from './components/TicketCardHeading/TicketCardHeading'
import Ticket from './components/Ticket/Ticket'
import BuyButton from './components/BuyButton/BuyButton'
function App() {
  return (
    <div className="App">
      <TicketHeader/>
      <TicketCardHeading/>
      <div className='tickets'>
      <Ticket/>
      <Ticket/>
      <Ticket/>
      <Ticket/>
      </div>
      <BuyButton/>
    </div>
  );
}

export default App;
