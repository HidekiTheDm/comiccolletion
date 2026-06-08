import './App.css';
import React from 'react';
import ravenCover from './assets/Raven-Cover.jpeg';
import snoppyStrip from './assets/snoppy-headimage.jpg';
import xmenCover from './assets/xmen-funfactimage.jpg';

function Body() {
    return (
                <div>
                    <img className='headStrip' src={snoppyStrip} alt='Snoppy Top Comic Strip'/>
                    <h1>This page works as some sort of exercise to keep my <br/>
                        skills in up to date.
                    </h1>

                    <div className='tableContainer'>
                        <table className='tableOfContents'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Bob</td>
                                    <td>30</td>
                                    <td>Designer</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='comicFunFact'>

                        <img src={ravenCover} alt="Raven Cover Issue"/>
                        <p className='funFactText'><strong>Fun Fact:</strong> I don't own all of this comics...<br/>
                            my biggest shame as a comic collector.
                        </p>
                    </div>

                    <div className='tableContainer'>
                        <table className='tableOfContents'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Bob</td>
                                    <td>30</td>
                                    <td>Designer</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                                <tr>
                                    <td>Batman 337</td>
                                    <td>25/01/1988</td>
                                    <td>30€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='comicFunFact'>

                        <p className='funFactText'><strong>Fun Fact:</strong> My favourite xmen is actually both of them!<br/>
                            I also, unfortunatly, don't onw this one...<br/>
                            FU*K
                        </p>
                        <img src={xmenCover} alt="Raven Cover Issue"/>
                        
                    </div>

                </div>
    ); 
}

export default Body;
