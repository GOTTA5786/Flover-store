import styles from '@/components/CatalogLandingFields/CatalogLandingFields.module.css'
import { cormorant, oswaldo } from '@/Fonts/fonts'

interface Props{
  prop:{
    main:string,
    children:string[]
  }
}


export default function CatalogLandingFields({prop}:Props) {
  return (
    <>
      <p className={styles.p + " " + oswaldo.className}> {prop.main} </p>
      <ul className={styles.ul}>
        {prop.children.map((item:string,i:number):any => { return <li id={`${i}`} className={styles.li + " " + oswaldo.className}>{item}</li> })}
      </ul>
    </>
  )
}