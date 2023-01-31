import React from "react";
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiRss } from '@mdi/js';

class HomeFooter extends React.Component {
    render() {
        return (
            <div className="footerBackground">
                <div class="container d-flex justify-content-between">
                    <div class="flex-start" id="pageBasicFooter">
                        <h3 class="pageFooterInfo">Instituto de Planejamento e Gestão de Cidades</h3>
                        <p>
                            <span class="footerIcon"><Icon path={mdiMapMarker} size={1.18} /></span>
                            <span class="footerInfo">Av. Paraná, 485 - Centro, Belo Horizonte, Minas Gerais, Brasil. CEP: 30.120-020</span>
                        </p>
                        <p>
                            <span class="footerIcon"><Icon path={mdiEmail} size={1} /></span>
                            <span class="footerInfo">contato@ipgc.com.br</span>
                        </p>
                        <p>
                            <span class="footerIcon"><Icon path={mdiPhone} size={1} /></span>
                            <span class="footerInfo">(31) 3582-3309</span>
                        </p>
                        <p>
                            <span class="footerIcon"><Icon path={mdiRss} size={1} /></span>
                            <span class="footerInfo"><a class="bold">Se inscreva</a> em nossa newsletter</span>
                        </p>
                    </div>
                    <div class="flex-end">
                        <img class="logo" src="https://ipgc.com.br/imagens/enviadas/7ab144fbe186385bf9aa4d1abfd18249.svg"
                            alt="IPGC" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFooter;