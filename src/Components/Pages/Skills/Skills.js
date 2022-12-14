import React from 'react';
import htmlIcon from '../../../Assets/MySkills/html.svg'
import cssIcon from '../../../Assets/MySkills/css.svg'
import javascriptIcon from '../../../Assets/MySkills/javascript.svg'
import jqueryIcon from '../../../Assets/MySkills/jquery.svg'
import reactIcon from '../../../Assets/MySkills/react.svg'
import apiIcon from '../../../Assets/MySkills/api.svg'




const Skills = () => {
    return (
        <div className='bg-[#374151] bg-blend-darken'>
            <div className='px-3 md:px-6 pt-10'>
                <h1 className='text-5xl text-white font-bold'>Skills</h1>
            </div>
            <div className='p-3 md:p-10'>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-0.5 gap-y-2 md:gap-x-4 md:gap-y-4 bg-slate-100 justify-items-center py-5 md:px-10 rounded-lg text-gray-700'>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={htmlIcon} alt="" /></div>
                        <div><p>HTML</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={cssIcon} alt="" /></div>
                        <div><p>CSS</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={javascriptIcon} alt="" className='h-[50px] w-[50px]' /></div>
                        <div><p>JavaScript</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={jqueryIcon} alt="" className='h-[50px] w-[50px]' /></div>
                        <div><p>JQuery</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={reactIcon} alt="" className='h-[50px] w-[50px]' /></div>
                        <div><p>React.js</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={reactIcon} alt="" className='h-[50px] w-[50px]' /></div>
                        <div><p>Express.js</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={reactIcon} alt="" className='h-[50px] w-[50px]' /></div>
                        <div><p>Node.js</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={apiIcon} alt="" className='h-[50px] w-[50px]' /></div>
                        <div><p>REST API</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={htmlIcon} alt="" /></div>
                        <div><p>Git</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={htmlIcon} alt="" /></div>
                        <div><p>Firebase</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={htmlIcon} alt="" /></div>
                        <div><p>MongoDB</p></div>
                    </div>
                    <div className='bg-slate-50 w-24 h-[100px] flex flex-col justify-center items-center rounded-lg shadow-lg'>
                        <div><img src={htmlIcon} alt="" /></div>
                        <div><p>VS Code</p></div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Skills;