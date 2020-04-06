import React from 'react';
import Card from './components/Card';
import CardTask from './components/CardTask';
import MainCard from './components/MainCard';
import OpinionCard from './components/OpinionCard';

//TODO: ask him whether you have to do a respnsive design
class App extends React.Component {
    //it would have been easier to use Redux for this task
    constructor() {
        super();
        this.state = {
            cardTaskName: 'Andy',
            cardTaskPosition: 'Head of UX Design',
            cardTaskContent:
                '"The Style Of This Test Task Matches The Style That You Will Be Making Real Job In"',
            mainCardTitle: 'Fonts & Colors',
            mainCardTitleBold: 'Matter',
            mainCardFirstCardTitle: 'Responsive Design',
            mainCardFirstCardPrice: '$19840',
            mainCardFirstCardRate: '+8.5%',
            mainCardFirstCardContent: "You'll Learn A Lot From This Task",
            mainCardSecondCardTitle: 'Mobile Friendly',
            mainCardSecondCardPrice: '$12380',
            mainCardSecondCardRate: '-3.2%',
            mainCardSecondCardContent: "Don't Forget About Small Devices",
            // TODO: add paths for images here later on
            reviewCardFirstCardName: 'Nia',
            reviewCardFirstCardContent:
                '"This task can be perfected for students from FIT"',
            reviewCardSecondCardName: 'Abigale',
            reviewCardSecondCardContent:
                '"I am so sexy, that men are doing test tasks for me for free"',
            reviewCardThirdCardName: 'Fedya',
            reviewCardThirdCardContent: '"Kuku Epta. EZ Task"',
            //Third section
            opinionCardFirstContent:
                'Wow, this test task is absolutely amazing! Loved it',
            opinionCardFirstCardName: 'John Kennedy',
            opinionCardFirstCardTime: '05:20',
            opinionCardFirstCardStarRating: 5,
            opinionCardSecondCardContent:
                'Holy cow, developers rock, but I missed the 5 stars button.',
            opinionCardSecondCardName: 'Vasiliy Igorsky',
            opinionCardSecondCardTime: '14:30',
            opinionCardSecondCardStarRating: 4,
        };
    }

    render() {
        //consider using redux
        return (
            // you'll have to style and structure your website here
            <div>
                <header>
                    <div className="logo"></div>
                    {/*or think about inserting an svg image here*/}
                    <div className="logo"></div>
                    <h3>Test task</h3>
                </header>
                <div>
                    <div>Do The Task</div>
                    <div>And Have Fun</div>
                </div>
                <div>
                    Be Persistent & Attentive To Details
                </div>
                <div className="card-container">
                    <CardTask
                        cardTaskName={this.state.cardTaskName}
                        cardTaskPosition={this.state.cardTaskPosition}
                        cardTaskContent={this.state.cardTaskContent}
                    />
                    <MainCard
                        mainCardTitle={this.state.mainCardTitle}
                        mainCardTitleBold={this.state.mainCardTitleBold}
                        mainCardFirstCardTitle={
                            this.state.mainCardFirstCardTitle
                        }
                        mainCardFirstCardPrice={
                            this.state.mainCardFirstCardPrice
                        }
                        mainCardFirstCardRate={this.state.mainCardFirstCardRate}
                        mainCardFirstCardContent={
                            this.state.mainCardFirstCardContent
                        }
                        mainCardSecondCardTitle={
                            this.state.mainCardSecondCardTitle
                        }
                        mainCardSecondCardPrice={
                            this.state.mainCardSecondCardPrice
                        }
                        mainCardSecondCardRate={
                            this.state.mainCardSecondCardRate
                        }
                        mainCardSecondCardContent={
                            this.state.mainCardSecondCardContent
                        }
                    />
                </div>
                <div className="reviews">
                    <h2>What Pros Are Saying...</h2>
                    <div className="review-cards">
                        <Card
                            name={
                                this.state.reviewCardFirstCardName
                            }
                            content={
                                this.state.reviewCardFirstCardContent
                            }
                        />
                        <Card
                            name={
                                this.state.reviewCardSecondCardName
                            }
                            content={
                                this.state.reviewCardSecondCardContent
                            }
                        />
                        <Card
                            name={
                                this.state.reviewCardThirdCardName
                            }
                            content={
                                this.state.reviewCardThirdCardContent
                            }
                        />
                    </div>
                </div>
                <div className="opinions">
                    <h2>What Other Coders Are Saying...</h2>
                    <div className="opinion-cards">
                        <OpinionCard content={this.state.opinionCardFirstContent}
                                     name={this.state.opinionCardFirstCardName}
                                     time={this.state.opinionCardFirstCardTime}
                                     rating={this.state.opinionCardFirstCardStarRating}
                         />
                        <OpinionCard content={this.state.opinionCardSecondCardContent}
                                     name={this.state.opinionCardSecondCardName}
                                     time={this.state.opinionCarSecondCardTime}
                                     rating={this.state.opinionCardSecondCardStarRating}
                         />
                    </div>
                </div>
                <footer>
                    <div>Don't Forget To Deploy Project To GitHub Pages</div>
                    <footer>
                        <div>
                            &copy; Test Task Limited<sup>TM</sup>, 2020. All
                            rights reserved.
                        </div>
                        <div>Terms Of Service | Privacy Policy</div>
                    </footer>
                </footer>
            </div>
        );
    }
}

export default App;
