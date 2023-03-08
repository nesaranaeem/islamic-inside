import Container from "@/components/container/Container";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Islamic Inside</title>
        <meta
          name="description"
          content="Islamic Inside is a islamic portal project. currently we are only providing prayer times"
        />
      </Head>
      <div>
        <Container />
      </div>
    </>
  );
};

export default Home;
