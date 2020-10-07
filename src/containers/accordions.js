import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
const { Panel } = Collapse
const { Option } = Select


const text = `
  Captain Maxwell Hernandez has been
  found dead next to his fishing vessel, 
  The Ramblin’ Rose, facedown in the waters
  at the Bahia Honda Inlet near Key West, Florida.
`;


class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

  iconChanger = ()=>{
    console.log('clicks')
  }

   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                onClick={event => {
                    event.stopPropagation();
                }}
            />
            )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
  }

  render() {
    
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel 
            header="About The Book"
            key="1"
            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton : 'https://www.stratton-press.com/books/key-west-interlude/',
                          barnes: 'https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986?ean=9781643454658',
                          amazon :'https://www.amazon.com/Key-West-Interlude-Lois-Richman-ebook/dp/B07QMP67HG/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=%22',  
                        },
                        reviews:{},
                        isNonfront:false,
                        paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
            header="Purchase PaperBack" 
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                        data={{
                            ebooks:{},
                            isNonfront:false,
                            reviews:{},
                            paperback:{
                                amazon:'https://www.amazon.com/Key-West-Interlude-Lois-Richman/dp/1643454633/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=%26amp%3B%2334%3B',
                                barnes:'https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986?ean=9781643454634',
                                booksamillion:'https://www.booksamillion.com/p/Key-West-Interlude/Lois-Richman/9781643454641?id=7714171848832',
                          }
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions