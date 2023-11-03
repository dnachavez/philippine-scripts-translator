import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavigationHeader() {
    const [isModalActive, setModalActive] = useState(false);

    const openModal = () => setModalActive(true);
    const closeModal = () => setModalActive(false);

    useEffect(() => {
        const handleOverlayClick = () => closeModal();
        if (isModalActive) {
            document.getElementById('overlay').addEventListener('click', handleOverlayClick);
        }

        return () => {
            document.getElementById('overlay').removeEventListener('click', handleOverlayClick);
        }
    }, [isModalActive])

    return (
        <div id='navigation-header' className='header'>
            <Link href='/'>
                <Image src='/assets/images/logo_horizontal.png' height={50} width={172} alt='Philippine Scripts Translator' priority></Image>
            </Link>
            <div onClick={openModal} style={{cursor: "pointer"}}>
                <Image src='/assets/images/info-button.svg' height={20} width={50} alt='Info Button'></Image>
            </div>
            <div className={`modal ${isModalActive ? 'active' : ''}`} id='modal'>
                <div className='modal-header'>
                    <Image className='logo' style={{marginRight: "10px"}} src='/assets/images/logo.png' height={100} width={100} alt='Philippine Scripts Translator'></Image>
                    <div className='title'>About Philippine Scripts Translator</div>
                    <div className='close'>
                        <button onClick={closeModal} className='close-button'>&times;</button>
                    </div>
                </div>
                <div className='modal-body' id='center'>
                    <br></br>
                    <span>The Philippine Scripts Translator is a tool for translating Filipino texts into ancient Philippine scripts. Based on jennayey&apos;s Philippine Scripts Translator project on GitHub and kuyabai.com. This translator is built using Next.js.</span><br></br>
                    <br></br>
                    <span>The tool is simple: you type in modern Filipino text, and it gives you the script from long ago. It&apos;s part of keeping our history alive and making sure these scripts stay in use.</span><br></br>
                    <br></br>
                    <span>Got questions? Contact us at <Link href='mailto:dna.chavez@outlook.com'>dna.chavez (at) outlook.com</Link>.</span><br></br>
                    <br></br>
                </div>
            </div>
            <div id='overlay' className={isModalActive ? 'active' : ''}></div>
        </div>
    )
}