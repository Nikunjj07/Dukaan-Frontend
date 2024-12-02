import './App.css'
import { Buttons } from './components/Buttons'
import { NavBar } from './components/Navbar'
import { RevenueCard } from './components/RevenueCard'
import { SearchBar } from './components/SearchBar'
import { Sidebar } from './components/Sidebar'
import { Table } from './components/Table'


function App() {

  return (
    <div >
      <Sidebar/>
      <div className='ml-64'>
        <NavBar/>
        <div className='p-10'>
          <h1 className='text-xl font-medium mb-5'>Overview</h1>
          <div className="grid grid-cols-3 ">
              <RevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={"23"}/>
              <RevenueCard title={"Amount Pending"} amount={"93,200.43"} orderCount={"10"}/>
              <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}/>
          </div>
          <h1 className='text-xl font-medium mt-7'>Transactions | This Month</h1>
          <Buttons title={"Payouts"}/>
          <Buttons title={"Refunds"}/>
          <SearchBar/>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default App
