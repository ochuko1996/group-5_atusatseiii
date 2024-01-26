import { BsArrowLeft } from 'react-icons/bs'
import Text from '../../atom/Text'
function SmallRoyalNotice({setShowText, title, text}) {
  return (
    <div className="smallRoyalNotices p-10">
        <span className="flex justify-center items-center w-10 h-10 cursor-pointer" style={{border: '1px solid black', borderRadius: '50%'}}>
          <BsArrowLeft onClick={()=> setShowText(false)}/>

        </span>
        <div className="srn-content mt-5">
          <div className="srn-title ">
            <Text type='h1' className='font-bold mb-5'>{title}</Text>
            <hr />
            <Text type='h1' className='font-bold mt-3'>
              {title}
            </Text>
            <Text>
              {text}
            </Text>
          </div>
        </div>
      </div>
  )
}

export default SmallRoyalNotice