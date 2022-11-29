import Head from 'next/head';
import Center from '../components/Center/Center';
import Nav from '../components/NavBar/NavBar';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className='bg-black'>
      <Head>
        <title>Bank Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/valknut-logo.ico" />
      </Head>
      <Nav/>
      <Center titulo='Você no Controle!' mensagem='OraciBank! A melhor experiência para sua vida financeira!' />
      <Content/>
      <Footer/>
    </div>
  );
}
