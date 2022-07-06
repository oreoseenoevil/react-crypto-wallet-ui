import { useState } from 'react';
import { Button } from 'Components/Button';
import { Header } from 'Components/Header';
import InputField from 'Components/InputField';
import { Wrapper } from 'Components/Wrapper';
import { QRCodeCanvas } from 'qrcode.react';
import moment from 'moment';
import { tableHead } from 'Constant/table';
import { FaRegCheckCircle, FaHourglassHalf, FaRegCopy } from 'react-icons/fa';
import useAskBalance from 'Hooks/useAskBalance';
import { truncateMiddle } from 'Utils/helper';
import styles from './App.module.scss';

export const App = () => {
  const [isTracking, setIsTracking] = useState(false);
  const {
    handleGetBalance,
    address,
    setAddress,
    balance,
    handleGetHistory,
    loadingAddress,
    loadingHistory,
    transactionHistory
  } = useAskBalance();

  const handleClick = () => {
    handleGetBalance();
    handleGetHistory();
    setIsTracking(true);
  };

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.main}>
        <Wrapper className={styles.main_wrapper}>
          <Wrapper className={styles.balance_wrapper}>
            <h1>ASK</h1>
            <h2>Total Balance</h2>
            <h1>{!loadingAddress && balance}</h1>
          </Wrapper>
          <Wrapper className={styles.input_wrapper}>
            <h1>Welcome to ASK Wallet Page</h1>
            <InputField
              value={address}
              onChange={setAddress}
              placeholder="Please enter wallet address"
              className={styles.address_input}
            />
            <Button onClick={handleClick}>Track Wallet Address</Button>
          </Wrapper>
        </Wrapper>

        {isTracking && !loadingAddress && (
          <Wrapper className={styles.received_wrapper}>
            <Wrapper className={styles.address_wrapper}>
              <div className={styles.address_header}>
                <h1>Received ASK</h1>
                <h2>ERC-20</h2>
                <span>{address}</span>
              </div>
              <Button className={styles.button_copy} onClick={() => navigator.clipboard.writeText(address)}>
                <FaRegCopy />
                <span>Copy</span>
              </Button>
            </Wrapper>
            <Wrapper className={styles.qr_wrapper}>
              <p>Share this QR code or public key with whomever sending you ASK.</p>
              <div className={styles.qrcode_wrapper}>
                <QRCodeCanvas value={address} />
              </div>
            </Wrapper>
          </Wrapper>
        )}

        {!loadingHistory && !!transactionHistory.length && (
          <Wrapper className={styles.history_wrapper}>
            <h1>History</h1>
            <Wrapper className={styles.table_wrapper}>
              <table>
                <thead>
                  <tr>
                    {tableHead.map((item, i) => (
                      <th key={i}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((item: any, i) => (
                    <tr key={i}>
                      <td>
                        {item.txreceipt_status ? (
                          <span>
                            <FaRegCheckCircle size="1em" />
                            <span>Received</span>
                          </span>
                        ) : (
                          <span>
                            <FaHourglassHalf size="1em" />
                            <span>Sent</span>
                          </span>
                        )}
                      </td>
                      <td>{item.value}</td>
                      <td>{moment(item.timeStamp * 1000).format('LLL')}</td>
                      <td title={item.from}>{truncateMiddle(item.from)}</td>
                      <td title={item.to}>{truncateMiddle(item.to)}</td>
                      <td title={item.hash}>{truncateMiddle(item.hash)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Wrapper>
          </Wrapper>
        )}
      </div>
    </div>
  );
};

export default App;
