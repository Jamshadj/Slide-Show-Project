import React from 'react';
import { ThemeProviderWrapper } from './ThemeContext';
import OpeningSlide from './components/OpeningSlide/OpeningSlide';
import SlideWithChart from './components/SlideWithChart/SlideWithChart';
import SlideWithImage from './components/SlideWithImage/SlideWithImage';
import SlideWithCodeBlock from './components/SlideWithCodeBlock/SlideWithCodeBlock';
import SlideWithPythonCompiler from './components/SlideWithPythonCompiler/SlideWithPythonCompiler';
import ClosingSlide from './components/ClosingSlide/ClosingSlide';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';

const App = () => {

  const images = [
    { url: 'https://imgs.search.brave.com/3mArhdq0CgJyMPb9WnRe8DMRDTfX9tIH9kXxbacomtA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qYXZhc2NyaXB0/LXByb2dyYW1taW5n/LWNvZGUtYWJzdHJh/Y3QtdGVjaG5vbG9n/eS1iYWNrZ3JvdW5k/XzI3MjMwNi0xNTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc', caption: 'Image 1' },
    { url: 'https://imgs.search.brave.com/3mArhdq0CgJyMPb9WnRe8DMRDTfX9tIH9kXxbacomtA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qYXZhc2NyaXB0/LXByb2dyYW1taW5n/LWNvZGUtYWJzdHJh/Y3QtdGVjaG5vbG9n/eS1iYWNrZ3JvdW5k/XzI3MjMwNi0xNTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc', caption: 'Image 2' },
    { url: 'https://imgs.search.brave.com/3mArhdq0CgJyMPb9WnRe8DMRDTfX9tIH9kXxbacomtA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qYXZhc2NyaXB0/LXByb2dyYW1taW5n/LWNvZGUtYWJzdHJh/Y3QtdGVjaG5vbG9n/eS1iYWNrZ3JvdW5k/XzI3MjMwNi0xNTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc', caption: 'Image 3' },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 75, 90, 50, 60],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const codeString = `const greet = (name) => {
    return \`Hello, \${name}!\`;
  };`;
  return (
    <ThemeProviderWrapper>
      <Header />
      <Container sx={{ py: 4 }}>
        <OpeningSlide />
        <SlideWithImage images={images} />
        <SlideWithChart chartData={chartData} />
        <SlideWithCodeBlock codeString={codeString} language="javascript" />
        <SlideWithPythonCompiler />
        <ClosingSlide />
      </Container>
      <Footer />
    </ThemeProviderWrapper>
  );
};

export default App;