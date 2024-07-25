"use client"
import { MyCalendar } from "@/components/Calendar";
import  Head  from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Calendar App</title>
        <meta name="description" content="A simple calendar app with events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Agenda</h1>
        <MyCalendar />
      </main>
    </div>
  );
}

export default Home;
