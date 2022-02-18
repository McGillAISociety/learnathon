import styles from '../styles/Landing.module.scss';
import dynamic from 'next/dynamic';
const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });

export default function Landing() {
    return (
        <heading className="flex-center">
            <div className={styles['wrapper']}>
                <div className="flex-center">
                    <img
                        className={styles['logo']}
                        src="/images/logo-big.png"
                        alt=""
                    />
                </div>
                <div className={styles['title']}>
                    <h1>
                        McGill AI <span>Learnathon</span>
                    </h1>
                    <h2>March 12th, 2022 &nbsp;&bull;&nbsp; 9:45 AM - 4 PM</h2>
                </div>
                <div className="flex-center">
                    <button
                        className={styles['button']}
                        onClick={() =>
                            window.open('https://forms.gle/QxT29mK4Va5pJiHp9')
                        }
                    >
                        Register
                    </button>
                </div>
            </div>
            <ParticlesBg color="#aaaaaa" num={50} type="cobweb" bg={true} />
        </heading>
    );
}
