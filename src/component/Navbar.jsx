import React from 'react';
import Connect from './Connect';

function Navbar() {
  return (
    <div className="bg-transparent top-0 z-50 fixed w-full backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <h1 className="font-semibold text-3xl text-white pr-9">KYC3</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>

          <div className="flex-row justify-items-end">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active hover:text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://kuzhanthaivelus-organization.gitbook.io/kyc3-sdk/">Docs</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link " href="https://github.com/manicdon7/kyc3-sdk" role="button" aria-expanded="false">
                  KYC3-SDK
                </a>

              </li>
            </ul>
          </div>
        <Connect />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
