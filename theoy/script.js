//console.log(document.body)
// console.log(document.head)
// console.log(document.documentElement) // helps access the html element
 // console.log(document.title)

 //changing title in runtime
// document.title = "DOM Tutorial"
 //this is wrong 
// a=document.title
// let b=prompt("enter title")
// a=b

//  let a=prompt("enter title")
//  document.title = a

// document.body.style.backgroundColor="pink"
// document.body.style.color="navy"
// document.body.style.fontSize="18px"
console.log(document.body.firstChild) // gives the first child of body ,yahan pr koi bhi node aayegi,toh agr bosy tag or nav tag k beevh space h toh output text hoga as text node ko bhi child node consider kiya jata h,prr
console.log(document.body.firstElementChild) // gives the first child element of body, yahan pr sirf element hi aayega, text node ko consider nahi kiya jayega
console.log(document.body.lastChild) // gives the last child of body
console.log(document.body.childNodes) // gives all the child nodes of body
console.log(document.body.children) // gives all the child elements of body, yaani ye bs element node ka he btayega pr child nodes vla sbhi node ko btayega,like text,element ,comment, etc etc
console.log(document.body.childElementCount) // gives the count of child elements of body
console.log(document.body.parentNode) // gives the parent node of body
// console.log(document.previousElementSibling) // gives the previous element sibling of body
// console.log(document.firstElementChild.nextElementSibling) // gives the next element sibling of body