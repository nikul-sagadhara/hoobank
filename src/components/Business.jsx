import { features } from "../constants";
import styles, {layout} from "../style";
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-col xs:flex-row p-6 rounded-[20px] gap-6 feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img className="w-[50%] h-[50%] object-contain" src={icon} alt="icon" />
    </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] text-white leading-[23px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-[16px] text-white leading-[24px] mb-1">{content}</p>
      </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`} >
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>You  do the Business, <br className="sm:block hidden" /> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Business;