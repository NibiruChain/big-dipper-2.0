import { keplrConfig } from '@configs';

export const suggestChain = async () => {
  if ('keplr' in window) {
    await window.keplr.experimentalSuggestChain({
      chainId: keplrConfig.chainID,
      chainName: keplrConfig.chainName,
      rpc: keplrConfig.rpcAddress,
      rest: keplrConfig.lcdAddress,
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'nibi',
        bech32PrefixAccPub: 'nibipub',
        bech32PrefixValAddr: 'nibivaloper',
        bech32PrefixValPub: 'nibivaloperpub',
        bech32PrefixConsAddr: 'nibivalcons',
        bech32PrefixConsPub: 'nibivalconspub',
      },
      currencies: [
        {
          coinDenom: 'NIBI',
          coinMinimalDenom: 'unibi',
          coinDecimals: 6,
          coinGeckoId: 'nibi',
        },
        {
          coinDenom: 'NUSD',
          coinMinimalDenom: 'unusd',
          coinDecimals: 6,
          coinGeckoId: 'nusd',
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'NIBI',
          coinMinimalDenom: 'unibi',
          coinDecimals: 6,
          coinGeckoId: 'nibi',
        },
      ],
      stakeCurrency: {
        coinDenom: 'NIBI',
        coinMinimalDenom: 'unibi',
        coinDecimals: 6,
        coinGeckoId: 'nibi',
      },
      coinType: 118,
      gasPriceStep: {
        low: 0.025,
        average: 0.03,
        high: 0.06,
      },
    });
  }
};
