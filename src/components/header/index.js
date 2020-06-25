import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import './index.css';
import SubHeader from '../subheader';
const layoutStyle = {
  position: 'fixed',
  zIndex: '10',
  top: '0px',
};

const Header = (props) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  console.log('router, router.pathname', router, router.pathname);
  const style = {
    color: router.pathname === '/' ? 'white' : 'black',
    background: router.pathname === '/' ? '' : 'white',
    paddingBottom: router.pathname === '/' ? '' : '20px',
  };
  const myFunction = () => {
    setOpen(!open);
    document.body.style.zIndex = '10000';
    document.body.style.backgroundImage = '';
  };
  return (
    <React.Fragment>
      <div
        style={
          open
            ? {
                height: '100%',
                background: 'rgba(255,255,255,.95)',
                opacity: '1',
                style,
              }
            : style
        }
        className="header"
      >
        <div
          style={
            open
              ? { color: 'black' }
              : router.pathname === '/'
              ? { color: 'white' }
              : { color: 'black' }
          }
          onClick={() => router.push('/')}
          className="company_name"
        >
          lotus
        </div>
        <div className="menu_icon">
          <div
            class={open ? 'container change' : 'container'}
            onClick={() => myFunction()}
          >
            <div
              style={
                router.pathname === '/' && !open
                  ? { backgroundColor: 'white' }
                  : {}
              }
              class="bar1"
            ></div>
            <div
              style={
                router.pathname === '/' && !open
                  ? { backgroundColor: 'white' }
                  : {}
              }
              class="bar2"
            ></div>
            <div
              style={
                router.pathname === '/' && !open
                  ? { backgroundColor: 'white' }
                  : {}
              }
              class="bar3"
            ></div>
          </div>
        </div>
        <div
          className={
            open ? 'other_pages_in_fullscreen_menu' : 'other_pages_in_header'
          }
          style={
            router.pathname === '/' && !open
              ? { color: 'white' }
              : { color: '#888' }
          }
        >
          <div style={router.pathname === '/news' ? { color: 'black' } : {}}>
            news
          </div>
          <Link href="/work">
            <div style={router.pathname === '/work' ? { color: 'black' } : {}}>
              works
            </div>
          </Link>
          <div>office</div>
        </div>
        <div className="sub_header" style={{ textAlign: 'right' }}>
          {router.pathname === '/work' ? <SubHeader /> : null}
        </div>
      </div>
      {/* )} */}
    </React.Fragment>
  );
};

export default Header;
