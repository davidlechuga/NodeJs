let wall = {
    build: false,
    planished: false,
    paited: false
}


function build (something){
    return new Promise(function (resolve, reject){
        something.build = true
        if (!something.build) return reject (new Error ('cannot build '))
        return resolve (something)
    })
}


function planish (something){
    return new Promise(function (resolve, reject){
        something.planished = true
        if (!something.planished) return reject (new Error ('cannot build '))
        return resolve (something)
    })
}


function paint (something){
    return new Promise(function (resolve, reject){
        something.painted = true
        if (!something.painted) return reject (new Error ('cannot build '))
        return resolve (something)
    })
}



build(wall)
.then((builtWall) => {
  console.log('Built Ok')
  planish(builtWall)
    .then((planishedWall) => {
      console.log('Planish Ok')
      paint(planishedWall)
        .then((paintedWall) => {
          console.log('Paint Ok')
          console.log('Finished: ', paintedWall)
        })
        .catch((error) => {
          console.error('Error: ', error)
        })
    })
    .catch((error) => {
      console.error('Error: ', error)
    })
})
.catch((error) => {
  console.error('Error: ', error)
})
