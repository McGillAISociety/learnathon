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
                    <h2>March 18th, 2023 &nbsp;&bull;&nbsp; 9:45 AM - 4 PM</h2>
                </div>
                <div className="flex-center">
                    <button
                        className={styles['button']}
                        onClick={() =>
                            window.open('https://docs.google.com/forms/u/1/d/e/1FAIpQLSdF0JgY6FGPNfDaBFv7SeA3RBMKXuKU2NB_S9ecrFOZIeTm9g/viewform')
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
