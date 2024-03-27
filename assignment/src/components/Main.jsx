import React, { useState } from "react";
import { Card1, Card2 } from "./Cards";
import './css/Main.css';
import { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { NavLink } from "react-router-dom";

//-------------------Bar-Chart----------------------
const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
//---------------Pie-Chart-----------------------
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

const Main = () =>{

    const [card1] = useState(Card1);
    const [card2] = useState(Card2);

    return(
        <>
            <div className="container-fluid mt-5 whole">
                <div style={{width:"99%"}}>
                    <div className="row">
                        <div className="col-12 m-0 p-0">
                            <div className="dashboard">
                                <div className="icon"><i class="fas fa-home"></i></div>
                                <div className="icon-title">Dashboard</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            card1.map((cardElem) =>{
                                const {num, img, name} = cardElem;
                                return(

                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="card1">
                                            <div className="card1-left">
                                                <div className="num">
                                                    {num}
                                                </div>
                                                <div className="name">
                                                    {name}
                                                </div>
                                            </div>
                                            <div className="card1-right">
                                                <div className="card-image">
                                                    <span><img src={img} alt={img} height={'40px'} width={'40px'}/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                        }
                    </div>

                    <div className="row">
                        {
                            card2.map((cardElem) =>{
                                const {num, img, name} = cardElem;
                                return(

                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="card2">
                                            <div className="card1-left">
                                                <div className="num2">
                                                    {num}
                                                </div>
                                                <div className="name">
                                                    {name}
                                                </div>
                                            </div>
                                            <div className="card1-right">
                                                <div className="card-image">
                                                    <span><img src={img} alt={img} height={'40px'} width={'40px'}/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                        }
                    </div>

                    <div className="row mt-1">
                        <div className="col-12 col-md-8 m-0 p-0">
                            <div className="left-chart">
                                <span style={{letterSpacing:'1px'}}>Monthly Improvement</span><hr />
                                <ResponsiveContainer width="100%" height="100%">
                                    <ComposedChart
                                    width={500}
                                    height={100}
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 80,
                                        bottom: 80,
                                        left: 20,
                                    }}
                                    >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
                                    <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} />
                                    <Tooltip />
                                    <Legend />
                                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="right-chart">
                                <span style={{letterSpacing:'1px'}}>Yearly Improvement</span><hr />
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={400} height={400}>
                                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="result">
                                <span className="result-section" style={{letterSpacing:'1px'}}>
                                    Results
                                </span>

                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th>S. No.</th>
                                            <th>Name</th>
                                            <th>Father's Name</th>
                                            <th>Class</th>
                                            <th>Roll No.</th>
                                            <th>Section</th>
                                            <th>Subject</th>
                                            <th>Total Marks</th>
                                            <th>Obtain Marks</th>
                                            <th>Percentage</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Suchismita Chatterjee</td>
                                            <td>Mr. Subhen Chatterjee</td>
                                            <td>MCA</td>
                                            <td>008</td>
                                            <td>B</td>
                                            <td>MERN Stack</td>
                                            <td>500</td>
                                            <td>450</td>
                                            <td>90</td>
                                            <td>
                                                <NavLink to={''} className={'table-nav'}>
                                                <span className="badge badge-success" style={{fontSize:'11px'}}>View Details</span>
                                                </NavLink>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>Pawan Kumar</td>
                                            <td>Dinesh Paswan</td>
                                            <td>B.Tech</td>
                                            <td>120</td>
                                            <td>B</td>
                                            <td>MERN Stack</td>
                                            <td>500</td>
                                            <td>450</td>
                                            <td>90</td>
                                            <td>
                                                <NavLink to={''} className={'table-nav'}>
                                                    <span className="badge badge-success" style={{fontSize:'11px'}}>View Details</span>
                                                </NavLink>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;