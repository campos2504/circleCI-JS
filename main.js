function Add(a, b) {
  return a * b;
}

function SayHello() {
  console.log("sup world from srcmake");
}

if (require.main === module) {
  SayHello();
}
