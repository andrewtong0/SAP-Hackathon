import React from 'react';
import QuestionnaireButtonGroup from './QuestionnaireButtonGroup';
import QuestionnaireEndGroup from './QuestionnaireEndGroup';
import './Questionnaire.css';

const Q1 = {
    title: "What are you here to do?",
    multiSelect: false,
    buttonObjects: [
        {id: 1_1, title: "I can volunteer time to help", nextQuestionId: 3},
        {id: 1_2, title: "I need some help", nextQuestionId: 2}
    ]
};

const Q2 = {
    title: "How can we help you?",
    multiSelect: false,
    buttonObjects: [
        {id: 2_1, title: "Acquiring PPE", nextQuestionId: 3},
        {id: 2_2, title: "Need Materials to Make PPE", nextQuestionId: 3},
        {id: 2_3, title: "Acquiring Household Goods", nextQuestionId: 3},
        {id: 2_4, title: "Purchasing Groceries", nextQuestionId: 3},
        {id: 2_5, title: "Volunteers", nextQuestionId: 3}
    ]
};

const Q3 = {
    title: "What type of equipment do you have access to?",
    multiSelect: true,
    buttonObjects: [
        {id: 3_1, title: "I have a 3D printer", nextQuestionId: 4},
        {id: 3_2, title: "I have a sewing machine", nextQuestionId: 4},
        {id: 3_3, title: "I don't have equipment but I can still help", nextQuestionId: 4}
    ]
};

const Q4 = {
    title: "Do you have material or food that you can donate?",
    multiSelect: true,
    buttonObjects: [
        {id: 4_1, title: "Personal protective equipment", nextQuestionId: 5},
        {id: 4_2, title: "Cloth for masks", nextQuestionId: 5},
        {id: 4_3, title: "3D printing material", nextQuestionId: 5},
        {id: 4_4, title: "Excess non-perishable food", nextQuestionId: 5}
    ]
};

const Q5 = {
    title: "Do you have a way to transport material?",
    multiSelect: true,
    buttonObjects: [
        {id: 5_10, title: "I can transport", nextQuestionId: 6},
        {id: 5_11, title: "I need help to transport some materials", nextQuestionId: 6},
        {id: 5_11, title: "I need someone to pickup my materials", nextQuestionId: 6}
    ]
};

const END = {
    title: "Great!",
    subtitle: "Here's how you can help your community fight COVID-19!",
    endText: "As always, please remember to socially distance!",
    potentialSolutions: [
        {
            title: "Help produce protective equipment",
            links: [
                {body: "> How to produce masks with 3D printers", hyperlink: "https://engineering.rowan.edu/research-centers/mask/index.html"},
                {body: "> How to sew masks", hyperlink: "https://sarahmaker.com/how-to-sew-a-surgical-face-mask-for-hospitals-free-pattern/"}
            ],
            imageLink: "./mask.svg"
        },
        {
            title: "Help pick up groceries",
            links: [
                {body: "> Balancing nutrients during a lockdown", hyperlink: "http://www.emro.who.int/nutrition/nutrition-infocus/nutrition-advice-for-adults-during-the-covid-19-outbreak.html"}
            ],
            imageLink: "./basket.svg"
        },
        {
            title: "Volunteer your time",
            links: [
                {body: "You're on your way to helping with COVID-19!", hyperlink: "#"}
            ],
            imageLink: "./hands.svg"
        },
        {
            title: "Donate Supplies",
            links: [
                {body: "> Where to donate PPEs in your local area", hyperlink: "https://www.cbsnews.com/news/coronavirus-how-to-donate-personal-protective-equipment-ppe-health-care-workers/"}
            ],
            imageLink: "./box.svg"
        },
    ]
}

const QUESTIONNAIRE_MAP = {
    1: Q1,
    2: Q2,
    3: Q3,
    4: Q4,
    5: Q5,
    "end": END
};

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);

        this.updateQuestionnaireResponses = this.updateQuestionnaireResponses.bind(this);
        this.state = {
            questionnaireResponses: [],
            questionToDisplayId: 1
        }
    }

    updateQuestionnaireResponses(responses, nextQuestionId) {
        const updatedQuestionnaireResponses = this.state.questionnaireResponses.concat(responses);
        this.setState({
            questionnaireResponses: updatedQuestionnaireResponses,
            questionToDisplayId: nextQuestionId
        });
    }

    render() {
        const questionnaireObject = QUESTIONNAIRE_MAP[this.state.questionToDisplayId];
        let questionnaireGroup;

        if (this.state.questionToDisplayId !== "end") {
            questionnaireGroup = <QuestionnaireButtonGroup
                buttonObjects={questionnaireObject.buttonObjects}
                isMultiSelect={questionnaireObject.multiSelect}
                questionnaireGroupTitle={questionnaireObject.title}
                updateQuestionnaireResponses={this.updateQuestionnaireResponses}
            />;
        }
        else {
            questionnaireGroup = <QuestionnaireEndGroup
                endGroup={END}
            />;
        }

        return (
            <div className="container">
                {questionnaireGroup}
            </div>
        );
    }
}

export default Questionnaire;