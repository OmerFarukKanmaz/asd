import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import { FifthComponent } from './FirstComponent';
import LearningJavaScript from './LeaningJavaScript';


export default function LearningComponent() {
    return (
        <div className="App">
            My Todo Applicattion

            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <FourthComponent></FourthComponent>
            <FifthComponent />

            <LearningJavaScript />
        </div>
    );
}