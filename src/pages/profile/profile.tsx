import style from "./profile.module.css";

export function Profile({
  imgProfile,
  name,
  description,
}: {
  imgProfile: string;
  name: string;
  description: string;
}) {
  return (
    <section
      className={style.containerProfile}
    >
      <div>
        <h1>{name}</h1>
        <p style={{lineHeight:'1.6'}} >{description}</p>
      </div>
      <img src={imgProfile} height={'400px'} className={style.imgProfile} alt="" />
    </section>
  );
}
