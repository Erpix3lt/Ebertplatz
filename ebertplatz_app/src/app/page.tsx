"use client"

import { Bot } from "grammy";
import { useState } from "react";
import ExampleComponent from '../components/three';

const Page = () => {
  const [message, setMessage] = useState('');

    const bot = new Bot(""); // <-- put your bot token between the ""

    bot.on("message", (ctx) => {
        ctx.reply("Thank you for taking part");
        if (ctx.message.text){
            setMessage(ctx.message.text);
        }
    });
    bot.start();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Welcome</h1>
      <p>Received the following message {message}</p>
      <ExampleComponent />
    </main>
  );
};

export default Page;
