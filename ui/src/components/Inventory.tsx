import { stringifyAmountValue } from '@agoric/ui-components';

type InventoryProps = {
  address: string;
  istPurse: Purse;
  itemsPurse?: Purse;
};

const Inventory = ({ address, istPurse, itemsPurse }: InventoryProps) => {
  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(address).then(() => {
      alert('Address copied to clipboard!');
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto transform transition-all hover:shadow-2xl hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">My Wallet</h3>
        <button 
          onClick={copyAddressToClipboard}
          className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
          title="Copy Address"
        >
          Copy Address
        </button>
      </div>

      <div className="bg-gray-100 rounded-xl p-4 mb-4">
        <small className="text-sm text-gray-600 block mb-2">Wallet Address</small>
        <code className="block text-sm bg-white rounded-lg p-2 text-gray-800 overflow-x-auto">
          {address}
        </code>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <b className="text-gray-800">IST Balance: </b>
            <span className="text-blue-800 font-bold text-lg">
              {stringifyAmountValue(
                istPurse.currentAmount,
                istPurse.displayInfo.assetKind,
                istPurse.displayInfo.decimalPlaces,
              )}
            </span>
          </div>
        </div>

        {itemsPurse && (
          <div className="bg-green-50 border border-green-100 rounded-xl p-4">
            {/* <div className="flex items-center justify-between">
              <b className="text-gray-800">Items</b>
              <span className="text-green-800 font-bold text-lg">
                {stringifyAmountValue(
                  itemsPurse.currentAmount,
                  itemsPurse.displayInfo.assetKind,
                  itemsPurse.displayInfo.decimalPlaces,
                )}
              </span>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export { Inventory };