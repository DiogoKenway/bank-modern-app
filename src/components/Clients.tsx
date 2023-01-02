import { clients } from "../constants";
import styles from "../styles";

const Clients = () =>
(
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map(({ id, logo }) => (
                <div key={id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
                    <img src={logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </section>
)


export default Clients;