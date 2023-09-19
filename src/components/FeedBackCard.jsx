import { quotes } from "../assets";

const FeedBackCard = ({content, name, title, img}) => 
   (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_qoutes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-white text-lg leading-loose tracking-tight my-10">
        {content}
      </p>

      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="text-white text-xl font-normal font-poppins leading-loose">{name}</h4>
          <p className="opacity-50 text-white text-base font-normal font-poppins">{title}</p>
        </div>
      </div>
    </div>
  )


export default FeedBackCard;