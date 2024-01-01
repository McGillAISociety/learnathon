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
                    <h2><strong>January 26th, 2024 &nbsp;&bull;&nbsp; 2:00 PM - 6:00 PM</strong></h2>
                </div>
                <div className="flex-center">
                    <button
                        className={styles['button']}
                        onClick={() =>
                            window.open('https://forms.gle/w6DTp2CYBPwEGbzL6')
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
