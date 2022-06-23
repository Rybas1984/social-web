
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return <div className={s.profileInfo}>
            <div>
                <img className={s.img_Header} src="https://izabotin.ru/wp-content/uploads/2019/09/panorama-kyiv-3-1024x320.jpg" alt="ava"/>
            </div>
            <div>
                <img className={s.img_Ava} src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"/>
                <span className={s.descript}> description </span>
            </div>

    </div>;
}

export default ProfileInfo;
