import chainConfigTestnet from './chain_config.testnet.json';
import chainConfigMainnet from './chain_config.mainnet.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  const chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE || process.env.NEXT_PUBLIC_CHAIN_STATUS;
  if (chainType === 'mainnet') {
    return chainConfigMainnet;
  }
  return chainConfigTestnet;
};

const getKeplrConfig = () => {
  const chainID = process.env.NEXT_PUBLIC_KEPLR_CHAIN_ID;
  const chainName = process.env.NEXT_PUBLIC_KEPLR_CHAIN_NAME || 'Nibiru';
  const rpcAddress = process.env.NEXT_PUBLIC_KEPLR_RPC_ADDRESS || 'http://localhost:26657';
  const lcdAddress = process.env.NEXT_PUBLIC_KEPLR_LCD_ADDRESS || 'http://localhost:1317';
  return {
    chainID,
    chainName,
    rpcAddress,
    lcdAddress,
  };
};

const chainConfig = getChainConfig();
const keplrConfig = getKeplrConfig();

export {
  chainConfig,
  generalConfig,
  keplrConfig,
};
