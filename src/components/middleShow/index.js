import './index.scss'
import React,{Component} from 'react'
import FA from 'react-fontawesome'
import msBg from '../../assets/img/seckill_hd.png'
import png1 from '../../assets/img/ms1.png'
import png2 from '../../assets/img/ms2.png'
import png3 from '../../assets/img/ms3.png'
import png4 from '../../assets/img/ms4.png'
import png5 from '../../assets/img/ms5.png'
import png6 from '../../assets/img/ms6.png'
import png7 from '../../assets/img/ms7.png'
import png8 from '../../assets/img/ms8.png'
const msStyle={
  width:'100%',
  height:'55px',
  background:`url(${msBg})`
}
export default class middleShow extends Component{
  constructor(props){
    super(props)
    this.state={
      showList:[
                {
                  goods:[
                    {name:'商品1',url:'#g1',pic:png1,oldPrice:300,newPrice:200},{name:'商品2',url:'#g2',pic:png2,oldPrice:320,newPrice:220},{name:'商品3',url:'#g3',pic:png3,oldPrice:330,newPrice:230},{name:'商品4',url:'#g4',pic:png4,oldPrice:340,newPrice:240}
                  ]
                },
                {
                  goods:[
                    {name:'商品5',url:'#g5',pic:png5,oldPrice:500,newPrice:400},{name:'商品6',url:'#g6',pic:png6,oldPrice:520,newPrice:420},{name:'商品7',url:'#g7',pic:png7,oldPrice:530,newPrice:430},{name:'商品8',url:'#g8',pic:png8,oldPrice:540,newPrice:440}
                  ]
                }
               ]
    }
  }
  render(){
    return (
      <div className='middle-show clearfix'>
          <div className='ms' style={msStyle}>
            <div className='title'><FA name='clock-o' size='2x'/>京东秒杀</div>
            <div className='link'><a href='#'>总有你想不到的低价<FA name = 'chevron-circle-right' /></a></div>
          </div>
          <div className='show'>
              <ul className=''>
                {
                  this.state.showList.map((item,index)=>{
                    return (
                      <li key={index}>
                        {
                          item.goods.map((value,inx)=>{
                            return (
                              <a href={value.url} key={inx}>
                                <img src={value.pic} />
                                <p className='name'>{value.name}</p>
                                <p className='price'><span className='new'>{value.newPrice}</span><span className='old'>{value.oldPrice}</span></p>
                              </a>
                            )
                          })
                        }
                      </li>
                    )
                  })
                }
              </ul>
              <div className=''>
              </div>
          </div>
      </div>
    )
  }
}
