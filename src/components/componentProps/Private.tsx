import { LogIn } from "./LogIn"
import { PublicProps } from "./Public";
// import { PublicProps } from "./Public";

type PrivateProps = {
    isLoggedIn: boolean;
    component: React.ComponentType<PublicProps>
}


export const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
    if(isLoggedIn) {
        return <Component name= "hello"/>
    }else{
        return <LogIn />
    }
}   