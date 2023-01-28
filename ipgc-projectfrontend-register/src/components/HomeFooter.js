import React from "react";

class HomeFooter extends React.Component {
    render() {
        return (
            <div className="footerBackground">
                <div class="container">
                    <div class="flex-start" id="pageBasicFooter">
                        <h3 class="pageFooterInfo">Instituto de Planejamento e Gestão de Cidades</h3>
                        <img class="logo" src="https://ipgc.com.br/imagens/enviadas/7ab144fbe186385bf9aa4d1abfd18249.svg"
                            alt="IPGC" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFooter;