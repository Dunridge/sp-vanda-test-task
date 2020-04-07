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
                cardTaskPhotoName: "card-task-profile",
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
            reviewCardFirstCardPhotoName: "nia",
            reviewCardSecondCardName: 'Abigale',
            reviewCardSecondCardContent:
                '"I am so sexy, that men are doing test tasks for me for free"',
            reviewCardSecondCardPhotoName: "abigale",
            reviewCardThirdCardName: 'Fedya',
            reviewCardThirdCardContent: '"Kuku Epta. EZ Task"',
            reviewCardThirdCardPhotoName: "fedya",
            //Third section
            opinionCardFirstContent:
                'Wow, this test task is absolutely amazing! Loved it',
            opinionCardFirstCardName: 'John Kennedy',
            opinionCardFirstCardTime: '05:20',
            opinionCardFirstCardStarRating: 5,
            opinionCardFirstCardPhotoName: "review-avatar-1",
            opinionCardSecondCardContent:
                'Holy cow, developers rock, but I missed the 5 stars button.',
            opinionCardSecondCardName: 'Vasiliy Igorsky',
            opinionCardSecondCardTime: '14:30',
            opinionCardSecondCardStarRating: 4,
            opinionCardSecondCardPhotoName: "review-avatar-2"
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
                        photoname={this.state.cardTaskPhotoName}
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

                            photoname = {this.state.reviewCardFirstCardPhotoName}
                        />
                        <Card
                            name={
                                this.state.reviewCardSecondCardName
                            }
                            content={
                                this.state.reviewCardSecondCardContent
                            }
                            photoname = {this.state.reviewCardSecondCardPhotoName}
                        />
                        <Card
                            name={
                                this.state.reviewCardThirdCardName
                            }
                            content={
                                this.state.reviewCardThirdCardContent
                            }
                            photoname = {this.state.reviewCardThirdCardPhotoName}
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
                                     photoname={this.state.opinionCardFirstCardPhotoName}
                         />
                        <OpinionCard content={this.state.opinionCardSecondCardContent}
                                     name={this.state.opinionCardSecondCardName}
                                     time={this.state.opinionCardSecondCardTime}
                                     rating={this.state.opinionCardSecondCardStarRating}
                                     photoname={this.state.opinionCardSecondCardPhotoName}
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
