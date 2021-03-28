import { React, PureComponent } from 'react';
import SliderField from './SliderField';
import cloud from './image/cloud.jpg';
import defaul from './image/default.png';
import dnsserver from './image/dns-server.png';
import fullStack from './image/full-stack-web-development.jpg';
import js from './image/js.jpg';
import load from './image/load-balancer.png';

export default class SliderFieldDemo extends PureComponent {
  render() {
    const array = [cloud, defaul, dnsserver, fullStack, js, load];
    return (
      <SliderField
        height={200}
        duration={2000}
        random
        defaultAlt="Default Image"
        defaultSrc={defaul}
        banners={array}
      />
    );
  }
}
