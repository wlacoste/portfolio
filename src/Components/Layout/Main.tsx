import ResponsiveAppBar from "../Appbar/appbar";
import styles from "./Main.module.scss" ;

interface IMainProps {
    children: React.ReactNode;
  }

export default function Main({ children }: IMainProps){
    return (
        <>
        
        <ResponsiveAppBar/>

        <div className={styles.main}>{children}</div>
        
        </>

        );
}