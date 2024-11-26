import { FormEvent, useState } from 'react';
import { stringifyAmountValue } from '@agoric/ui-components';
import istIcon from '../assets/IST.svg';
import smileIcon from '../assets/smile.png';

const { entries, values } = Object;
const sum = (xs: bigint[]) => xs.reduce((acc, next) => acc + next, 0n);

const terms = {
  price: 250000n, // 0.25 IST
  maxItems: 1n,
};

const nameToIcon = {
  smile: smileIcon,
} as const;

type ItemName = keyof typeof nameToIcon;
type ItemChoices = Partial<Record<ItemName, bigint>>;

const parseValue = (numeral: string, purse: Purse): bigint => {
  const { decimalPlaces } = purse.displayInfo;
  const num = Number(numeral) * 10 ** decimalPlaces;
  return BigInt(num);
};

const Item = ({
  icon,
  coinIcon,
  label,
  value,
  onChange,
  inputClassName,
  inputStep,
}: {
  icon?: string;
  coinIcon?: string;
  label: string;
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  inputClassName: string;
  inputStep?: string;
}) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md transform transition-all hover:scale-105">
    <label className="text-lg font-semibold text-gray-800 mb-2">
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </label>
    <div className="flex items-center space-x-3 mb-3">
      {icon && <img className="w-6 h-6 object-contain" src={icon} title={label} />}
      {coinIcon && <img className="w-10 h-10 object-contain" src={coinIcon} title={label} />}
    </div>
    <input
      title={label}
      type="number"
      min="0"
      max="1"
      value={value}
      step={inputStep || '1'}
      onChange={onChange}
      className={`
        w-full px-4 py-2 border-2 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition-all duration-300 
        ${inputClassName === 'ok' 
          ? 'border-green-500 text-green-800 hover:bg-green-50' 
          : 'border-red-500 text-red-800 hover:bg-red-50'}
      `}
      placeholder="Enter amount"
    />
  </div>
);

type DonationProps = {
  makeDonation: (giveValue: bigint, wantChoices: Record<string, bigint>) => void;
  istPurse: Purse;
  walletConnected: boolean;
};

const Donate = ({ makeDonation, istPurse, walletConnected }: DonationProps) => {
  const [giveValue, setGiveValue] = useState(terms.price);
  const [choices, setChoices] = useState<ItemChoices>({ smile: 1n });
  const [error, setError] = useState<string | null>(null);

  const changeChoice = (ev: FormEvent) => {
    if (!ev.target) return;
    const elt = ev.target as HTMLInputElement;
    const title = elt.title as ItemName;
    if (!title) return;
    const qty = BigInt(elt.value);
    const { [title]: _old, ...rest }: ItemChoices = choices;
    const newChoices = qty > 0 ? { ...rest, [title]: qty } : rest;
    setChoices(newChoices);
  };

  const handleDonationClick = () => {
    if (giveValue < terms.price) {
      setError('You must donate at least 0.25 IST');
      return;
    }
    setError(null);
    makeDonation(giveValue, choices);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8 space-y-6 border border-gray-100">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Luxury Donation Experience
        </h2>

        <div className="space-y-6">
        <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
  <img className="w-full h-auto object-contain" src={smileIcon} alt="Smile Icon" />
</div>


          <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Donation Amount</h3>
            {entries(nameToIcon).map(([title]) => (
              <Item
                key="IST"
                coinIcon={istIcon}
                value={
                  istPurse
                    ? stringifyAmountValue(
                        { ...istPurse.currentAmount, value: giveValue },
                        istPurse.displayInfo.assetKind,
                        istPurse.displayInfo.decimalPlaces,
                      )
                    : '0.25'
                }
                label="IST"
                onChange={ev =>
                  setGiveValue(parseValue(ev?.target?.value, istPurse))
                }
                inputClassName={giveValue >= terms.price ? 'ok' : 'error'}
                inputStep="0.01"
              />
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center space-y-4">
          {walletConnected && (
            <button 
              onClick={handleDonationClick} 
              className="
                w-full py-4 text-xl font-bold 
                bg-gradient-to-r from-blue-600 to-purple-600 
                text-white rounded-xl 
                hover:from-blue-700 hover:to-purple-700 
                transition-all duration-300 
                transform hover:scale-105 
                shadow-lg hover:shadow-xl
              "
            >
              Make a Luxurious Donation
            </button>
          )}

          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-500"
              style={{
                width: `${(Number(giveValue) / Number(terms.price)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Donate };