/*let profiles = [
    {
        name: "Samson",
        position: "Senior Full-Stack Developer",
        status: "Single"
    },
    {
        name: "Ayokunle",
        position: "Junior Full-Stack Developer",
        status: "Single"
    },
    {
        name: "Abdulazeez",
        position: "Senior Product Designer",
        status: "Married"
    },
    {
        name: "Samuel",
        position: "Mid-Lever Full-Stack Developer",
        status: "Single"
    }
]

let display = profiles.forEach(profile => {
    console.log(Object.keys(profile))
    console.log(Object.values(profile))
    console.log(profile.name)
    console.log(profile.position)
})


let numbers = [1,2,2,3,3,4,4,5,5,5];
let result = numbers.forEach(number => {
    let obj = [{number: number}]
    console.log(obj.number)
})
console.log(result);
*/
let arr1 = [1,2,3,4,5,6];
let arr2 = [1,2,2,3,3,3,4,4,4]

let Result = arr1.map((arr, arr2) => {
    this.arr = arr
    let obj = {arr: arr2}
    console.log(obj)
})

let output = new Result(arr1, arr2)
console.log(output);
