function saySomething(x) {

  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve("something!!!!!!" + x);
    }, 2000);
  });

  return promise
}

async function talk(x) {
  const words = await saySomething(x);
  console.log(words);
}

talk(2);
console.log("hello")
talk(4);
console.log("hello")
talk(8);