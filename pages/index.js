import React from 'react';
import Container from '@mui/material/Container';
import Layout from '../components/layout';
import Header from '../components/header';
import About from '../components/about';
import Solutions from '../components/solutions';
import Head from 'next/head';
export default function Home() {
    return (
    <Layout>
        <Head>
            <title>Welcome to ProSuite</title>
            <meta name="description" content="Discover the power of Software. Every day, our clients are faced with challenges and opportunities. We help them solve their problems by connecting them to information technology. We offer solutions that grow, empower, and help businesses. ProSuite is a one-stop solution for enterprise operations, offering services from asset tracking to compliance management. With its emphasis on user experience and easy-to-use tools, ProSuite transforms complex tasks into simple operations. As a flexible, cloud-based suite, ProSuite ensures business continuity and scalability, allowing businesses to manage their operations anytime, anywhere." />
            <link rel="icon" href="/logo.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="theme-color" content="#ffffff" />
            <html lang="en" />
        </Head>
        <Container>
            <Header/>
            <About/>
            <Solutions/>
        </Container>
    </Layout>

  );
}
