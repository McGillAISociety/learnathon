import styles from '../styles/Footer.module.scss';
import { MdEmail as Email } from 'react-icons/md';
import {
    FaFacebookF as Facebook,
    FaInstagram as Instagram,
    FaLinkedinIn as Linkedin,
    FaTwitter as Twitter,
    FaDiscord as Discord,
    FaReddit as Reddit,
    FaGithub as Github,
    FaMediumM as Medium,
} from 'react-icons/fa';

const iconProps = {
    color: 'white',
    size: 30,
    className: styles['footer__logo'],
};

const socials = [
    {
        icon: <Email {...iconProps} />,
        link: 'mailto:mcgillaicontact@gmail.com',
    },
    {
        icon: <Facebook {...iconProps} />,
        link: 'https://www.facebook.com/McGillAI/',
    },
    {
        icon: <Instagram {...iconProps} />,
        link: 'https://www.instagram.com/mcgillaisociety/',
    },
    {
        icon: <Linkedin {...iconProps} />,
        link: 'https://www.linkedin.com/company/mcgill-artificial-intelligence-society/',
    },
    {
        icon: <Twitter {...iconProps} />,
        link: 'https://twitter.com/mcgillaisociety',
    },
    {
        icon: <Discord {...iconProps} />,
        link: 'https://discord.gg/G42Vm26hgR',
    },
    {
        icon: <Reddit {...iconProps} />,
        link: 'https://www.reddit.com/user/mcgillAI/',
    },
    {
        icon: <Github {...iconProps} />,
        link: 'https://github.com/McGillAISociety',
    },
    {
        icon: <Medium {...iconProps} />,
        link: 'https://medium.com/mcgill-artificial-intelligence-review',
    },
];

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__socials']}>
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className="flex-center">
                <small>
                    © McGill AI Society&nbsp;
                    {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
}
