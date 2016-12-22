class Message{
  constructor(citizen, rep, sendClient){
    this.citizen = citizen,
    this.rep = rep,
    this.sendClient = sendClient,
    store.messages = [...store.messages, this]
  }
}
