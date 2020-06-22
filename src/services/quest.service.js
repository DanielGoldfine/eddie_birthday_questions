export default {
    getQuests
}

const parents = {
    relation: 'parents',
    subHeader: 'Gil and Jone, you can include Dore and Myrna in the frame with you or film them seperately making their wishes',
    questions: [
        'What was Eddie like as a child?',
        'What do you like about Eddie?',
        'Tell me a funny, memorable or unique storie about Eddie',
        'What is special about Eddie? special qualities/hobbies, etc',
        'What do you wish Eddie for his 60th birthday?'
    ]
}
const siblings = {
    relation: 'siblings',
    subHeader: 'Micha, It would be great to have Adam and Leiah as well, you can film them both in a seperate video. Bizi, I sent this link to Ben Asaf and Aviya. (there\'s a questions page for nephews and nieces). You can include Shai and Talila in the frame with you or film them seperately making their wishes',
    questions: [
        'What was Eddie like as a brother?',
        'What do you like about Eddie?',
        'Tell me a funny, memorable or unique storie with you and Eddie',
        'What is special about Eddie? special qualities/hobbies, etc',
        'What do you wish Eddie for his 60th birthday?'
    ]
}
const nephewsnieces = {
    relation: 'nephews and nieces',
    questions: [
        'What kind of an uncle Eddie is?',
        'What do you like about Eddie?',
        'What do you wish Eddie for his 60th birthday?'
    ]
}
const friends = {
    relation: 'friends',
    questions: [
        'What kind of a friend Eddie is?',
        'What do you like about Eddie?',
        'What makes eddie special?',
        'Tell me a funny, memorable or unique storie with you and Eddie',
        'What do you wish Eddie for his 60th birthday?'
    ]
}
const noaFamily = {
    relation: 'Noa\'s family',
    questions: [
        'What do you like about Eddie?',
        'What makes eddie special?',
        'Tell me a funny, memorable or unique storie with you and Eddie',
        'What do you wish Eddie for his 60th birthday?'
    ]
}


function getQuests(relation) {

    let quests;

    if (relation === 'parents') quests = parents;
    if (relation === 'siblings') quests = siblings;
    if (relation === 'newphewsnieces') quests = nephewsnieces;
    if (relation === 'friends') quests = friends;
    if (relation === 'noafamily') quests = noaFamily;
    
    return quests;
};