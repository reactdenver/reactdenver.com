import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function PastEvent({ event }) {

  return (
  <div className={'past-event'}>
    <img className={'past-event__image'} src='' alt=''></img>
    <div className={'past-event__content'}>
      <p className={'past-event__text_small'}></p>
      <h3 className={'past-event__text_large'}></h3>
      <p className={'past-event__text_small'}></p>
      <p className={'past-event__text_small'}></p>
    </div>
  </div>
  )
}