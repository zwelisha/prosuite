import React from 'react';
import Container from '@mui/material/Container';
import Layout from '../components/layout';
import Header from '../components/header';
import About from '../components/about';
import Solutions from '../components/solutions';

export default function Home() {
    return (
    <Layout>
        <Container>
            <Header/>
            <About/>
            <Solutions/>
        </Container>
    </Layout>

  );
}
