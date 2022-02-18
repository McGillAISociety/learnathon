import Info from '../components/Info';
import Landing from '../components/Landing';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import Sponsors from '../components/Sponsors';

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
            {/* TODO: when the other things are implemented, properly change the alternating blue bg */}
            {/* <div className="blue-bg">
                <Schedule />
            </div> */}
            <div className="blue-bg">
                <FAQ />
            </div>
            <Sponsors />
        </>
    );
}
