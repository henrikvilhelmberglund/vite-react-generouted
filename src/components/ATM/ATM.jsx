import { useEffect, useState } from "react";

const ATM = () => {
  const [amount, setAmount] = useState(0);
  const [funds, setFunds] = useState(300);
  const [currency, setCurrency] = useState("SEK");
  const [infoText, setInfoText] = useState("");
  // chatgpt thingy below
  const [shouldRunCurrencyEffect, setShouldRunCurrencyEffect] = useState(false); // New state variable

  useEffect(() => {
    console.log("Booting up ATM...ATM is ready!");
    return () => {
      console.log("ATM shutting down…");
    };
  }, []);
  useEffect(() => {
    console.log(`Current amount: ${amount}`);
  }, [amount]);
  useEffect(() => {
    if (!shouldRunCurrencyEffect) {
      // Skip the effect on initial mount
      setShouldRunCurrencyEffect(true);
      return;
    }
    console.log(`Chosen currency: ${currency}`);
    setAmount((prevState) => {
      if (currency === "SEK") return prevState * 10;
      if (currency === "Euro") return prevState / 10;
    });
    setFunds((prevState) => {
      if (currency === "SEK") return prevState * 10;
      if (currency === "Euro") return prevState / 10;
    });
  }, [currency]);

  return (
    <main className="bg-green-500 w-[500px] h-[700px]">
      <p>This is the ATM</p>
      <button onClick={() => setCurrency("SEK")}>Currency: SEK</button>
      <button onClick={() => setCurrency("Euro")}>Currency: Euro</button>
      <div className="flex justify-around pt-4">
        <button onClick={() => setAmount(0)}>Reset</button>
        <button onClick={() => setAmount((prevState) => prevState + 100)}>
          100
        </button>
        <button onClick={() => setAmount((prevState) => prevState + 500)}>
          500
        </button>
        <button onClick={() => setAmount((prevState) => prevState + 1000)}>
          1000
        </button>
      </div>
      <p className="relative left-0 top-12">
        Current funds: {funds} {currency}
      </p>
      <div className="bg-white m-4 h-32 flex items-center justify-center font-semibold text-3xl">
        <p>{amount}</p>
        <p className="pl-2">{currency}</p>
      </div>
      <button
        onClick={() => {
          if (amount === 0) {
            setInfoText("Please select amount");
            return;
          }
          if (amount > funds) {
            setInfoText(`You can't withdraw more than ${funds} ${currency}`);
            return;
          }
          setInfoText("Withdrawing money...");
          setTimeout(() => {
            setInfoText(`Successfully withdrew ${amount} ${currency}!`);
            setFunds((prevState) => prevState - amount);
            setAmount(0);
          }, 2000);
        }}>
        Withdraw money
      </button>
      <button
        onClick={() => {
          if (amount === 0) {
            setInfoText("Please select amount");
            return;
          }
          setInfoText("Depositing money...");
          setTimeout(() => {
            setInfoText(`Successfully deposited ${amount} ${currency}!`);
            setFunds((prevState) => prevState + amount);
            setAmount(0);
          }, 2000);
        }}>
        Deposit money
      </button>
      {infoText && <p className="text-xl">{infoText}</p>}
    </main>
  );
};

export default ATM;
