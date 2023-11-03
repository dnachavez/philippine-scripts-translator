import Link from 'next/link'

export default function Footer() {
    return (
        <div className='footer' id='center'>
            <br></br>
            <span className='footer-text' id='center'>Based on the work of <Link href='https://jennayey.com' target='_blank' rel='noopener noreferrer'>jennayey</Link> and the <Link href='https://github.com/jennayey/philippine-scripts-translator' target='_blank' rel='noopener noreferrer'>Philippine Scripts Translator</Link> project.</span><br></br>
            <span className='footer-text' id='center'>Inspired by the intuitive design of <Link href='https://kuyabai.com' target='_blank' rel='noopener noreferrer'>kuyabai.com</Link></span><br></br>
            <br></br>
            <span className='footer-text' id='center'>Built using Next.js by <Link href='https://dnachavez.ph' target='_blank' rel='noopener noreferrer'>dnachavez</Link>.</span>
        </div>
    )
}