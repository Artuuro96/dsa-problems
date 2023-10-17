console.log("Begin");

const request = (number: number) => new Promise((resolve, reject) => {
  let res = '';
  setTimeout(() => {
    res = `Request Completed ${number}`
    resolve(res)
  }, 1000);
})

request(1).then(res1 => {
  console.log(`${res1}`);
  request(2).then(res2 => {
    console.log(`${res2}`);
    request(3).then(res3 => {
      console.log(`${res3}`);
      request(4).then(res4 => {
        console.log(`${res4}`);
      });
    });
  });
});

request(1)
  .then(res1 => {
    console.log(`${res1}`);
    return request(2);
  })
  .then(res2 => {
    console.log(`${res2}`);
    return request(3);
  })
  .then(res3 => {
    console.log(`${res3}`);
    return request(4);
  })
  .then(res4 => {
    console.log(`${res4}`);
  });


async function main() {
  const res1 = await request(1);
  console.log(`${res1}`);
  const res2 = await request(2);
  console.log(`${res2}`);
  const res3 = await request(3);
  console.log(`${res3}`);
  const res4 = await request(4);
  console.log(`${res4}`);
}

if(require.main == module) {
  main()
}

console.log("End");


