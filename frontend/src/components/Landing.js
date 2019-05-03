import React, { Component } from 'react';
import { FiMail } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { Slide } from 'react-slideshow-image';
import bg from '../images/bg.png';

import { 
    DiDjango,
    DiBootstrap,
    DiCss3,
    DiGitMerge,
    DiHtml5,
    DiJira,
    DiLinux,
    DiMarkdown,
    DiNginx,
    DiOpensource,
    DiPython,
    DiRasberryPi,
    DiReact,
    DiStackoverflow,
    DiTerminal,
    DiVim,
    DiWindows
} from 'react-icons/di';
import {
    Jumbotron,
    Button
} from 'reactstrap';

const properties = {
    duration: 1500,
    transitionDuration: 300,
    infinite: true,
    indicators: false,
    arrows: false
}

class Greeter extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{ backgroundImage: `url(${bg})` }} className="text-dark text-center">
                    <h1 className="display-3">Samuel Lewis</h1>
                    <p className="lead">Software Engineer | Problem Solver | Thinker | Learner</p>
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        <Button className="mx-1" color="primary">
                            <div className="d-inline-block">
                                    Projects 
                            </div>
                            <div className="ml-1 d-inline-block" style={{width: "1.5em"}}>
                                <Slide {...properties}>
                                    <DiDjango className="each-slide" />
                                    <DiBootstrap className="each-slide"/>
                                    <DiCss3 className="each-slide"/>
                                    <DiGitMerge className="each-slide"/>
                                    <DiHtml5 className="each-slide"/>
                                    <DiJira className="each-slide"/>
                                    <DiLinux className="each-slide"/>
                                    <DiMarkdown className="each-slide"/>
                                    <DiNginx className="each-slide"/>
                                    <DiOpensource className="each-slide"/>
                                    <DiPython className="each-slide"/>
                                    <DiRasberryPi className="each-slide"/>
                                    <DiReact className="each-slide"/>
                                    <DiStackoverflow className="each-slide"/>
                                    <DiTerminal className="each-slide"/>
                                    <DiVim className="each-slide"/>
                                    <DiWindows className="each-slide"/>
                                </Slide>
                            </div>
                        </Button>
                        <Button className="mx-1" color="success">
                            <div className="d-inline-block" style={{height: "1.5em"}}>
                                    Contact
                            </div>
                            <div className="ml-1 d-inline-block" style={{height: "1.5em", width: "1.5em"}}>
                                <FiMail />
                            </div>
                        </Button>
                    </IconContext.Provider>
                </Jumbotron>
            </div>
        );
    }
}

export default Greeter;
