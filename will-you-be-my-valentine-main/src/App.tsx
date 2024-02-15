"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "You're being really mean.",
      "Can I please ask again?",
      "I'll get you the Swedish Candy from TikTok.",
      "I'll buy you Jo Malone everyday",
      "I'll get you NUTT Milk Matcha Latte",
      "PLEASE SUA",
      "But :*(",
      "Ok jumping off Catalyst",
      "Yep im dead",
      "I'll make you Bulgogi Korean Ass person",
      "plzplz",
      ":((((",
      "TRY AGAIN NOW",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANYASEYO BRUH",
      "SARANGHAEO ANI ANYASEYO BRUH",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Thank you Sua. You had no other choice btw..))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
