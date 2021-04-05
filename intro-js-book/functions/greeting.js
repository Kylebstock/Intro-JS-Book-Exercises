const greetPeople = () => {
  let greetingMessage = 'Good Morning!';
  console.log(greetingMessage);
}

const changeGreetingMessage = (newMessage) => {
  greetingMessage = newMessage;
}
changeGreetingMessage();
greetPeople();