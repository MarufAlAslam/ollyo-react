import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/main';
import './assets/styles/global.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndProvider backend={HTML5Backend}>
    <Main/>
  </DndProvider>
);