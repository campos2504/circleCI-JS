const { Add } = require('./main');

function TestAdd() {
  if (Add(2, 3) === 5) {
    console.log("Add Function works correctly");
  } else {
    console.error("Add Function is not working correctly");
  }
}

if (require.main === module) {
  TestAdd();
}