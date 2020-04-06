import React from 'react';
import Card from './components/Card';
import CardTask from './components/CardTask';
import MainCard from './components/MainCard';
import OpinionCard from './components/OpinionCard';

/*
constructor() {
        super();
        this.state = {
            willWatch: false
        };
    }
*/

//TODO: pass arrays of details to the state --> conserve space
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
            mainCardFirstCardRate: {
                rate: '+8.5%',
                upState: true,
            },
            mainCardFirstCardContent: "You'll Learn A Lot From This Task",
            mainCardSecondCardTitle: 'Mobile Friendly',
            mainCardSecondCardPrice: '$12380',
            mainCardSecondCardRate: {
                rate: '-3.2%',
                upState: false,
            },
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
                <div className="header">
                    <div className="logo"></div>
                    {/*or think about inserting an svg image here*/}
                    <div className="logo"></div>
                    <h2>Test task</h2>
                </div>
                <div>
                    <h2>Do The Task</h2>
                    <h2>And Have Fun</h2>
                </div>
                <div>
                    <h2>Be Persistent & Attentive To Details</h2>
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
                            reviewCardFirstCardName={
                                this.state.reviewCardFirstCardName
                            }
                            reviewCardFirstCardContent={
                                this.state.reviewCardFirstCardContent
                            }
                        />
                        <Card
                            reviewCardSecondCardName={
                                this.state.reviewCardSecondCardName
                            }
                            reviewCardSecondCardContent={
                                this.state.reviewCardSecondCardContent
                            }
                        />
                        <Card
                            reviewCardThirdCardName={
                                this.state.reviewCardThirdCardName
                            }
                            reviewCardThirdCardContent={
                                this.state.reviewCardThirdCardContent
                            }
                        />
                    </div>
                </div>
                <div className="opinions">
                    <h2>What Other Coders Are Saying...</h2>
                    <div className="opinion-cards">
                        <OpinionCard opinionCardFirstContent={this.state.opinionCardFirstContent}
                                     opinionCardFirstCardName={this.state.opinionCardFirstCardName}
                                     opinionCardFirstCardTime={this.state.opinionCardFirstCardTime}
                                     opinionCardFirstCardStarRating={this.state.opinionCardFirstCardStarRating}
                         />
                        <OpinionCard opinionCardSecondCardContent={this.state.opinionCardSecondCardContent}
                                     opinionCardSecondCardName={this.state.opinionCardSecondCardName}
                                     opinionCardSecondCardTime={this.state.opinionCarSecondCardTime}
                                     opinionCardSecondCardStarRating={this.state.opinionCardSecondCardStarRating}
                         />
                    </div>
                </div>
                <footer>
                    <h2>Don't Forget To Deploy Project To GitHub Pages</h2>
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
