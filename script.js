let fname = ["jason", "carla", "james", "thomson"];

const NamePrintMethod = fname.forEach((item)=> {
if(item[0] === 'J' || item[0] === 'j'){
    console.log(`goodbye ${item}`)
}else {
    console.log(`hello ${item}`)
}
})

console.log(NamePrintMethod)