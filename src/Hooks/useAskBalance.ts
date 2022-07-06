import { useState } from 'react';
import { API_KEY } from 'Configs/keys';
import axios from 'axios';

const useAskBalance = () => {
  const [balance, setBalance] = useState(0);
  const [loadingAddress, setLoadingAddress] = useState(false);
  const [address, setAddress] = useState('');
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleGetBalance = () => {
    setLoadingAddress(true);
    if (address) {
      axios
        .get(
          `https://api.polygonscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`
        )
        .then((data) => {
          setBalance(data.data.result);
          setLoadingAddress(false);
        });
    }
  };

  const handleGetHistory = () => {
    setLoadingHistory(true);
    if (address) {
      axios
        .get(
          `https://api.polygonscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${API_KEY}`
        )
        .then((data) => {
          setTransactionHistory(data.data.result);
          setLoadingHistory(false);
        });
    }
  };

  return {
    balance,
    handleGetBalance,
    handleGetHistory,
    address,
    setAddress,
    loadingAddress,
    loadingHistory,
    transactionHistory
  };
};

export default useAskBalance;
