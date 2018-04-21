import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

class Index extends React.PureComponent {
  render() {
    return (
      <ul>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Index</title>
        </Head>
        <li><Link href="carousel"><a>1. carousel: 轮播</a></Link></li>
        <li><Link href="carousel2"><a>2. carousel: 轮播2</a></Link></li>
        <li><Link href="canvas/bezier"><a>3. 贝塞尔曲线</a></Link></li>
      </ul>
    );
  }
}

export default Index;