import instagramIcon from '../assets/images/ig-icon.svg'
import whatsappIcon from '../assets/images/wa-icon.svg'
import githubIcon from '../assets/images/github-icon.svg'
import linkedInIcon from '../assets/images/linkedin-icon.svg'
import gmailIcon from '../assets/images/gmail-icon.svg'

const defaultChat = 'Hi Fajar.'
const defaultSubject = 'I saw your profile'

export const contacts = [
    {
        icon:whatsappIcon,
        text : `https://api.whatsapp.com/send/?phone=%2B6281357558274&text=${defaultChat}&app_absent=0`,
    },
    {
        icon:gmailIcon,
        text : `mailto:slashcrackdie@gmail.com?subject=${defaultSubject}&body=${defaultChat}`
    },
    {
        icon:instagramIcon,
        text : 'https://www.instagram.com/jaaar_j/'
    },
    {
        icon:githubIcon,
        text : 'https://github.com/Juliantooo'
    },
    {
        icon:linkedInIcon,
        text : 'https://www.linkedin.com/in/fajar-julianto-946648205/'
    },
]