import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(state => state.app?.isMenuOpen);
    // console.log(isMenuOpen)
    if (!isMenuOpen) {
        return null
    }

    const handleDownload = () => {
        let examplePdf = 'http://194.233.80.220:8088/content/generated-pdfs/d2e48dbd-eff2-4c30-a15f-3f2b1156f463.pdf'
        const link = document.createElement('a');
        link.href = examplePdf;
        link.download = 'dummyNew';
        link.target = '_blank';
        link.click();
    };


    return (
        <div className='w-48 shadow-lg p-5 absolute bg-white' >
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li className='cursor-pointer' onClick={handleDownload} >Download PDF</li>
                <li>Live</li>
                <li>Shorts</li>
            </ul>
            <h1 className='font-bold pt-5' >Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>

            </ul>
            <h1 className='font-bold pt-5' >Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

        </div>
    )
}

export default Sidebar