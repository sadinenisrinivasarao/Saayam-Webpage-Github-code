import './HomePage.css'
import Home_Component_1 from '../../Components/HomePage_Component_1'
// import Home_Component_2 from '../../Components/HomePage_Component_2'
// import Home_Component_3 from '../../Components/HomePage_Comonent_3'
// import Home_Component_4 from '../../Components/HomePage_component_4'
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Home_Component_1 />

        </>

    )
}