/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import appContainer from './app-container.css';
import SideMenu from './SideMenu';
// ==
import TransactionScreen from './TransactionScreen';
import AccountHeader from './AccountHeader';
// ===
import LastOperations from './LastOperations';
import MasterScreen from './MasterScreen';
import SearchBlock from './SearchBlock';
import SearchBar from './SearchBar';
import TipIcon from './TipIcon';
import MyAccounts from './MyAccounts';
import CurrencyExchenger from './CurrencyExchenger';
import ProductsList from './ProductsList';
import MyCards from './MyCards';
// import SomeContext from './SomeContext'
import Button from './Button';
import Footer from './Footer';

const propsAccountHeader = {
  accountHolderName: 'Fyodor Dostoevsky',
  accountStatus: 'Verified',
  accountId: 24852,
  interfaceLanguage: 'ENG',
};

const propsLastOperations = [
  {
    transactionType: 'debit',
    status: 'pending',
    amount: 1333.33,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Amazon',
  },
  {
    transactionType: 'credit',
    status: 'complete',
    amount: 524.23,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Card *1015',
  },
  {
    transactionType: 'debitInner',
    status: 'complete',
    amount: 524.23,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Alexander Block',
  },
  {
    transactionType: 'debit',
    status: 'pending',
    amount: 524.23,
    currency: 'usd',
    date: '2020-08-16',
    label: 'Alexander Block',
  },
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TransactionScreen: {
        propsAccountHeader,
        propsLastOperations,
      },
      MasterScreenData: {
        currencyExchangeData: [],
        testContext: 'Test Context Works!',
      },
    };
  }

  render() {
    return (
      <>
        <div className={appContainer['app-container']}>
          <SideMenu>menu</SideMenu>
          {/* <SomeContext.Provider value={this.state.MasterScreenData}> */}
          <MasterScreen>
            <SearchBlock>
              <SearchBar />
              <TipIcon />
            </SearchBlock>
            <MyAccounts />
            <CurrencyExchenger />
            <ProductsList />
          </MasterScreen>
          {/* </SomeContext.Provider> */}
          <TransactionScreen>
            <AccountHeader
              accountHolderName={propsAccountHeader.accountHolderName}
              accountStatus={propsAccountHeader.accountStatus}
              accountId={propsAccountHeader.accountId}
              interfaceLanguage={propsAccountHeader.interfaceLanguage}
            >
              <Button>Log out</Button>
            </AccountHeader>
            <LastOperations operations={propsLastOperations} />
            <MyCards />
          </TransactionScreen>
        </div>
        <Footer />
      </>
    );
  }
}

export default Dashboard;
