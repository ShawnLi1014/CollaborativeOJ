var problems = [{
        id: 1,
        name: 'Two Sum',
        desc: 'hhhh',
        difficulty: 'easy'
    },
    {
        id: 2,
        name: '3Sum',
        desc: 'hhhh',
        difficulty: 'medium'
    },
    {
        id: 3,
        name: '4Sum',
        desc: 'hhhh',
        difficulty: 'medium'
    },
    {
        id: 4,
        name: 'Two Sum',
        desc: 'hhhh',
        difficulty: 'hard'
    },
    {
        id: 5,
        name: 'Two Sum',
        desc: 'hhhh',
        difficulty: 'super'
    }];

var getProblems = function() {
    return new Promise((resolve, reject) => {
        resolve(problems);
    });
};

var getProblem = function(id) {
    return new Promise((resolve, reject) => {
        resolve(problems.find(problem => problem.id === id));
    });
};

var addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        if(problems.find(problem => problem.name === newProblem.name)) {
            reject("Problem already exists!")
        } else {
            newProblem.id = problems.length + 1;
            problems.push(newProblem);
            resolve(newProblem);
        }
    })
};

module.exports = {
    getProblems: getProblems,
    getProblem: getProblem,
    addProblem: addProblem
};