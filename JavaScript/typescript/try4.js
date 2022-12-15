function createMenu({ title, body, buttonText, cancellable }) {
  console.log(title);
  console.log(body);
  console.log(buttonText);
  console.log(cancellable);
}

function createMenu(params) {
  console.log(params.title);
  console.log(params.body);
  console.log(params.buttonText);
  console.log(params.cancellable);
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true,
});
