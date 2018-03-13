var faker = require('faker');

// for json-server

module.exports = () => {
    const data = {};

    for(let i = 1; i <= 3; i++){
        data.chats = data.chats || [];
        data.chats.push({
            id: i,
            owner: faker.internet.userName(),
            avatar: '/avatar.jpg',
            members: faker.random.number(1000),
        })
    }

    data.login = {
        status: 0,
        msg: 'success'
    }

    return data;
}