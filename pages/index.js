import Info from '../components/Info';
import Landing from '../components/winter2026/Landing';
import Speakers from '../components/winter2026/Speakers';
import Schedule from '../components/winter2026/Schedule';
import FAQ from '../components/FAQ';
import Sponsors from '../components/winter2026/Sponsors';

// TODO: make the blue background borders at an angle, like last year's site?
// TODO: implement speakers and schedule
export default function Index() {
    return (
        <>
            <Landing />
            <div className="blue-bg">
                <Info />
            </div>
            <Speakers />
            <div className="blue-bg">
                <Schedule />
            </div>
            <FAQ />
            <div className="blue-bg">
                <Sponsors />
            </div>
        </>
    );
}
