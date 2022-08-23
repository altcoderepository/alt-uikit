import React from 'react';
import { createRoot } from 'react-dom/client';

import { Paragraph } from './Paragraph/Paragraph';
import GlobalStyles from './styles/globalStyle';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <div>
      <Paragraph size="MD">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur ducimus est
        exercitationem illum incidunt maiores, modi mollitia nisi nostrum optio reprehenderit
        soluta, voluptatibus! Autem dolor nihil quae repellat velit!
      </Paragraph>
    </div>
  </React.StrictMode>
);
