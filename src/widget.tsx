import React from 'react';
import ReactDOM from 'react-dom';

import Scaffold from 'components/Scaffold';

interface IWidget {
  render(): void;
}

class Widget implements IWidget {
  private readonly ref: HTMLElement | null;

  constructor() {
    this.ref = document.getElementById('wdgt');
  }

  public render(): void {
    if (!this.ref) {
      throw new Error('Can\'t find a DOM element');
    }

    ReactDOM.render(<Scaffold />, this.ref);
  }
}

const widget: IWidget = new Widget();

widget.render();
