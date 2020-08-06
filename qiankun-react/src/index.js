import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Link } from "react-router-dom";




function App() {
  return (
    <BrowserRouter basename='/react'>
      <Link to='/'>
        qiankun-react首页
      </Link>

      <Link to='/about'>
        qiankun-react关于页面
      </Link>

      <Route path='/' exact render={
        () => (
          <h1>qiankun-react index页面</h1>
        )
      }>
      </Route>

      <Route path='/about' exact render={
        () => (
          <h1>qiankun-react关于页面</h1>
        )
      }>
      </Route>




    </BrowserRouter>
  )

}



function render(params) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}


export async function bootstrap() {

}

export async function mount() {
  render();
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}