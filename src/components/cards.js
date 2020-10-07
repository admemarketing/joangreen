import React, {useState, useEffect} from 'react'
import { Card } from 'antd';
import { Markup } from 'interweave';

const { Meta } = Card;



const Cards = ()=>{

    return(
        <> 
            <div className="cards-wrapper">
                <div className="container-gt">
                    <div className="grid-layouts">
                        <Card
                            hoverable
                            style={{ width: 400 }}>

                            <Meta
                                title="The Bible Is God's Instruction Book"  
                                description={<Markup content={`
                                    <span class="span-tag">Psalm 25:4 show me thy ways, o Lord: teach me thy paths.</span>
                                    <span class="span-tag">Isaiah 55:8-9 God said 'my ways are higher than your way's</span>
                                    <span class="span-tag">We are to follow his instructions in order to receive from him.</span>

                                    <p>
                                        <span class="span-tag">
                                            This book was written with the purpose of teaching you
                                            God's way to health, wealth, happiness, security and peace of mind.
                                         </span>

                                        <span class="span-tag">
                                            Reach the source of your good and get the desired results you have been seeking.
                                            Follow these easy and simple guidelines and god will bring success into your life.
                                        </span>
                                    </p>
                                    
                                    <h5 class="sub-heading-ft">
                                        As you follow the 10 guidelines in this book,
                                        ​you'll discover the power of God.
                                    </h5>

                                    <p>
                                        <span class="span-tag">It will lift you out of a state of frustration, illness, loneliness, discord and poverty.</span>
                                        <span class="span-tag">God can set you up on the road to happiness, health and freedom.</span>
                                        <span class="span-tag">Jesus said, "If thou canst believe, all things are possible to him (her) that believeth." (mark 9:23)</span>
                                    </p>
                                `} />}
                            />
                            
                        </Card>

                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img 
                                alt="example" 
                                    src="//nebula.wsimg.com/d1f90035568bc3a603d90f6ef8071c59?AccessKeyId=874AF8FCB53FE28ED223&disposition=0&alloworigin=1g" />}
                        >
                            <Meta 
                                title="Faith makes it possible ​to please God" 
                                description={<Markup content={`
                                    <p>
                                        Hebrews 11:6 - For he who comes to God must believe that he is and that he is a rewarder of those who diligently seek him.
                                    </p>
                                    <p>
                                        No one can please God without faith, for whoever comes to God
                                        must have faith that God exists ​and rewards those who seek him.
                                    </p>
                                `} />}/>
                        </Card>


                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img 
                                alt="example" 
                                    src="//nebula.wsimg.com/7e1c0a7a709208b678062606c69c0dd8?AccessKeyId=874AF8FCB53FE28ED223&disposition=0&alloworigin=1" />}
                        >
                            <Meta 
                                title="Faith unlocks the door to receiving God's best" 
                                description={<Markup content={`
                                    <p>
                                        God wants you to receive 
                                        what he has promised, but
                                        you must use your faith
                                    </p>
                                    <p>
                                        The bible is God's instruction book. 
                                        <span class="span-emphasize">10 guidelines on how to receive from God </span>
                                        is based on the word of God.
                                        If you will follow these 10 guidelines,
                                        you will start receiving ​God's best for your life.  
                                    </p>
                                `} />}/>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Cards