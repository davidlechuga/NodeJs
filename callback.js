let wall = {
    build: false,
    planished: false,
    paited: false
}


function build (something, callback){

    something.build = true;
    const error = something.build ? null : new Error('cannot buid')
    callback(error, something)
        
}

function planish (something, callback) {
    something.planished = true
    const error = something.planished ? null : new Error ('cannot platish')
    callback(error, something)
}

function paint (something, callback) {
    something.paited = true
    const error = something.paited ? null : new Error ('cannot platish')
    callback(error, something)
}




