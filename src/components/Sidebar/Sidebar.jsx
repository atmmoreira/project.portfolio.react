import React from 'react';
import './Sidebar.css';
import Avatar from '../../assets/images/Avatar.png';
import {AiOutlineFilePdf, AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai'
import {TbBrandTelegram, TbBrandWhatsapp, TbSchool, TbLanguage} from 'react-icons/tb'
import {VscGithub} from 'react-icons/vsc'

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar col-md-3">
        <div className="row text-center">
          <div className="col-sm-6 col-lg-12">
            <img src={Avatar} alt="Avatar" className="img-fluid" />
          </div>
          <div className="col-sm-6 col-lg-12 d-flex flex-column align-items-center mt-sm-5 mt-lg-0">
            <h2>Anderson Martins</h2>
            <small>Frontend Web UI Developer</small>
            <button className="btn btn-curriculum mt-3 btn-sm d-flex align-items-center justify-content-center">
              <AiOutlineFilePdf/>
              <span>Download pdf</span>
            </button>
          </div>
        </div>
        <div className="row">
          <ul className="list-unstyled d-flex justify-content-center mt-3 social">
            <li className="mx-1"><a className="btn btn-curriculum rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank"><AiOutlineMail /></a></li>
            <li className="mx-1"><a className="btn btn-curriculum rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank"><TbBrandTelegram /></a></li>
            <li className="mx-1"><a className="btn btn-curriculum rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank"><TbBrandWhatsapp /></a></li>
            <li className="mx-1"><a className="btn btn-curriculum rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank"><AiOutlineLinkedin /></a></li>
            <li className="mx-1"><a className="btn btn-curriculum rounded-circle d-flex justify-content-center align-items-center" href="#" target="_blank"><VscGithub /></a></li>
          </ul>
        </div>
        <div className="row languages-education">
          <div className="col-sm-6 col-lg-12 education">
            <div className="d-flex align-items-center mb-2">
              <TbSchool />
              <h2>Educação</h2>
            </div>
            <ul>
              <li>Tecnologia em Sistemas para Internet</li>
              <li>Universidade Estácio de Sá</li>
              <li>2008 - 2011</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-12 languages">
            <div className="d-flex align-items-center mb-2">
              <TbLanguage />
              <h2>Idiomas</h2>
            </div>
            <ul>
              <li>Português - Nativo.</li>
              <li>Inglês - Nível C1, Avançado.</li>
              <li>Espanhol - Nível B2, Intermediário.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
