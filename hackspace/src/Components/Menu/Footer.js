import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import TextAnimated from '../TextAnimated.js'
import Horloge from '../Horloge.js'
import Image from '../Image.js'
import Ip from '../Ip.js'

import gist from '../../ressources/gist.png'

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2020|| #
// #.\=============================================/.#
// ###################################################

class Footer extends Component {

  constructor(props) {
      super(props)
      this.state = {
        // url : "http://127.0.0.1:3000/",
         url : "http://88.127.234.194/",
        linksBoard : [{   id:"securite",
                            src:"https://image.flaticon.com/icons/svg/149/149464.svg"
                        },
                        {   id:"audit",
                            src:"https://image.flaticon.com/icons/svg/2910/2910793.svg"
                        },
                        {   id:"code",
                            src:"https://image.flaticon.com/icons/svg/2586/2586083.svg"
                        },
                        {   id:"github",
                            name : "http://github.com/roiseuxquentin",
                            src:"https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"
                        },
                        {   id:"gist",
                            name : "https://gist.github.com/Roiseuxquentin",
                            src: gist }]
      }
  }

 action(e) {
    e.preventDefault();
    const url = e.target.name
    const id = e.target.id
    

    if ((id == "audit") || (id == "securite") || (id == "code")) {
        (id == "audit") ? this.setState({ footerLine : "noTech , no future.." }) : this.setState({footerLine : this.state.ip }) 
        
        //THX STACK OVER FLOW///////////////////////////////////////////
         function array_move(arr, old_index, new_index) {             //  
            if (new_index >= arr.length) {                            //  
                var k = new_index - arr.length + 1;                   //  
                while (k--) {                                         // 
                    arr.push(undefined);                              //
                }                                                     // 
            }                                                         //
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);    //
            return arr; // for testing                                //
        }                                                             //
        ////////////////////////////////////////////////////////////////

        const btnList = this.state.linksBoard.map(elt => elt.id )
        const oldPlace = btnList.indexOf(id)
        const btn = array_move(this.state.linksBoard, oldPlace, 2)
        this.setState({linksBoard : btn })

        document.getElementById("header").style.opacity = 1
        document.getElementById("header").style.height = "130px"
        document.getElementById("header").style.zIndex = "2";
        this.props.onSelected(e)
    } else {
        window.open(url,'_blank');
    } 
 }

    render() {
        return (<div className={!this.props.display ? "firstFooter endStick " : "footer endStick"} >
                    <div className="flex center fadeIn">   
                        { this.state.linksBoard.map((btn,i) => <img onClick={(e) => this.action(e) } 
                                                                    key={i}
                                                                    id={btn.id}
                                                                    data-tip={btn.id}
                                                                    name={(!!btn.name) ? btn.name : "" }
                                                                    className={(i == 2) ? "footerBack" : "footerItem"} 
                                                                    src={btn.src} /> ) }
                        <div className={!this.props.display ? "firstFooterLine" : "footerLine"} />
                    </div>
                    <div className="fadeIn" >
                        <ReactTooltip />
                        {(this.props.stack == "code") ? <Horloge /> : (this.props.stack == "audit") ?  <TextAnimated string="noTech , no future.." up /> : <Ip />  }
                    </div>
                </div>
                )
    }
}

export default Footer;